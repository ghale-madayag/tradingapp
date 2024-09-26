<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class TradeController extends Controller
{
    private $coinsApiKey = '6rOVV3vIx7obo98Otfxc77WTu0oGufz8n3I87ZJ7Cr5FcfBsB9HcULsAiv1YHZJh';
    private $coinsSecret = 'D5969nmVjjW3702c1wM1n5NSahGZ7Jgc2c5j45EKbCqwwcVy5cPTiVzVSdif4Ej2';
    private $baseUrl = 'https://api.pro.coins.ph';

    public function dashboard()
    {
        $coins = $this->getAllCoinsUnder5PHP();
        //dd($this->getAllCoinsUnder5PHP());
        //dd($this->serverTime());
       //dd($this->checkBuySignal($coins));

        return Inertia::render('trade/index',[
            'balance' => $this->getBalance(),
        ]);
    }

    public function getBalance(){
        $pathBal = '/openapi/v1/account';

        $recvWindow = 5000;
        $timestamp = time() * 1000;

        $queryParams = 'timestamp=' . $timestamp;
        
        $stringToSign = $queryParams;
    
        $secret = $this->coinsSecret;

        $signature = hash_hmac('sha256', $stringToSign, $secret);

        $queryParamsWithSignature = $queryParams . '&signature=' . $signature;

        $urlBal= $this->baseUrl . $pathBal . '?' . $queryParamsWithSignature;
        
        $resBal = Http::withHeaders([
            'X-COINS-APIKEY' => $this->coinsApiKey,
        ])->get($urlBal);

        // $filteredBal = collect($resBal)->filter(function ($bal) {
        //     return floatval($bal['asset']) == 'PHP';  // Filter coins with price <= 5 PHP
        // });
        $responce = $resBal->json();

        //dd($responce);
        
        $phpBalance = array_filter($responce['balances'], function ($query) {
            return $query['asset'] === 'PHP';
        });

        $phpBalanceSum = array_sum(array_column($responce['balances'], 'free'));

        $freePHP = $phpBalance ? reset($phpBalance)['free'] : null;

        return $freePHP;
    }

    public function getAllCoinsUnder5PHP(){
        $path = 'https://api.pro.coins.ph/openapi/quote/v1/ticker/24hr';
    
        // Fetch the coin data from the API
        $response = Http::withHeaders([
            'X-COINS-APIKEY' => $this->coinsApiKey,
        ])->get($path);
    
        $coins = $response->json();  // Parse the JSON response
    
        // Filter the coins where the lastPrice is less than or equal to 5 PHP
        $coinsUnder5PHP = collect($coins)->filter(function ($coin) {
            return floatval($coin['lastPrice']) <= 1 && strpos($coin['symbol'], 'PHP') !== false;  // Filter coins with price <= 5 PHP
        }); 
    
        return $coinsUnder5PHP;  // Return the filtered list
    }
    
    public function placeOrder($symbol, $side, $type, $quantity, $price) {
        $path = '/openapi/v1/order/test';  // Coins.ph API endpoint for placing orders
        // Get the current timestamp
        $timestamp = $this->serverTime();
    
        // Concatenate the query parameters as a string
        $queryParams = 'symbol=' .$symbol.
                        '&side=' . $side . 
                        '&type=' . $type .
                        '&timeInForce=GTC'. 
                        '&quantity=' . $quantity . 
                        '&price=' . $price . 
                        '&recvWindow=5000'.
                        '&timestamp=' . $timestamp;
    
        // Generate the HMAC signature using the API secret
        $signature = hash_hmac('sha256', $queryParams, $this->coinsSecret);
        
        // Append the signature to the query string
        $queryParams .= '&signature=' . $signature;
    
        // Build the final URL
        $url = $this->baseUrl . $path . '?' . $queryParams;
        return $url;
        // Make the HTTP request
        $response = Http::withHeaders([
            'X-COINS-APIKEY' => $this->coinsApiKey,
        ])->post($url);
    
        // Return the API response
        return $response->json();
    }

    public function serverTime(){
        $path = '/openapi/v1/time';  // Coins.ph API endpoint for placing orders
    
        // Build the final URL
        $url = $this->baseUrl . $path;
        //return $url;
        // Make the HTTP request
        $response = Http::withHeaders([
            'X-COINS-APIKEY' => $this->coinsApiKey,
        ])->get($url);
    
        $serverTime = $response->json();
        // Return the API response
        return $serverTime['serverTime'];
    }

    public function orderHistory() {
        $path = '/openapi/v1/historyOrders';  // Coins.ph API endpoint for placing orders
        // Get the current timestamp
        $timestamp = time() * 1000;
    
        // Concatenate the query parameters as a string
        $queryParams = 'symbol=BONKPHP'.
                        '&timestamp=' . $timestamp;
        //return $queryParams;
    
        // Generate the HMAC signature using the API secret
        $signature = hash_hmac('sha256', $queryParams, $this->coinsSecret);
        
        // Append the signature to the query string
        $queryParams .= '&signature=' . $signature;
    
        // Build the final URL
        $url = $this->baseUrl . $path . '?' . $queryParams;
        //return $url;
        // Make the HTTP request
        $response = Http::withHeaders([
            'X-COINS-APIKEY' => $this->coinsApiKey,
        ])->get($url);
    
        // Return the API response
        return $response->json();
    }


    public function myTrades() {
        $path = '/openapi/v1/myTrades';  // Coins.ph API endpoint for placing orders
        // Get the current timestamp
        $timestamp = time() * 1000;
    
        // Concatenate the query parameters as a string
        $queryParams = 'symbol=BONKPHP'.
                        '&timestamp=' . $timestamp;
        //return $queryParams;
    
        // Generate the HMAC signature using the API secret
        $signature = hash_hmac('sha256', $queryParams, $this->coinsSecret);
        
        // Append the signature to the query string
        $queryParams .= '&signature=' . $signature;
    
        // Build the final URL
        $url = $this->baseUrl . $path . '?' . $queryParams;
        //return $url;
        // Make the HTTP request
        $response = Http::withHeaders([
            'X-COINS-APIKEY' => $this->coinsApiKey,
        ])->get($url);
    
        // Return the API response
        return $response->json();
    }

    
    public function checkBuySignal($coin) {
        $msg = [];

        foreach ($coin as $coin) {
            $entryPrice = floatval($coin['lastPrice']);
            // Fetch historical prices
            $historicalPrices = $this->getHistoricalPrices($coin['symbol']);
            $currentPrice = floatval($coin['lastPrice']);
            // Calculate MACD
            $macd = $this->calculateMACD($historicalPrices);

            // Calculate RSI
            $rsi = $this->calculateRSI($historicalPrices, 14); // 14-period RSI
            
            // Entry Conditions
            $buySignal = $macd['signal'] > 0 && $rsi < 30; // Buy if MACD is positive and RSI is oversold
            $sellSignal = $macd['signal'] < 0 && $rsi > 70; // Sell if MACD is negative and RSI is overbought
            
            // Execute trades based on signals
            if ($buySignal) {
                //$msg[] = "Buying " . $coin['symbol'] . " at price " . $entryPrice . "\n";
                $msg[] = $this->placeOrder($coin['symbol'], 'BUY', 'MARKET', 50, $currentPrice);
            }

            if ($sellSignal) {
                $msg[] = "Selling " . $coin['symbol'] . " at price " . $currentPrice . "\n";
                // Place sell trade logic here
            }

            // Stop Loss check (assuming you have the entry price stored)
            if (isset($entryPrice) && $this->checkStopLoss($currentPrice, $entryPrice, 2)) { // 2% stop loss
                return "Selling " . $coin['symbol'] . " at price " . $currentPrice . " due to stop loss\n";
                // Place sell logic here
            }
        }

        return $msg;
    }
    
    //Strategy

    public function calculateMACD($prices, $shortTermPeriod = 12, $longTermPeriod = 26, $signalPeriod = 9) {
        $emaShort = $this->calculateEMA($prices, $shortTermPeriod);
        $emaLong = $this->calculateEMA($prices, $longTermPeriod);
        $macd = $emaShort - $emaLong;
    
        // Calculate Signal Line
        $signalLine = $this->calculateEMA(array_slice($prices, -$signalPeriod), $signalPeriod); // Signal line from MACD values
    
        return ['macd' => $macd, 'signal' => $signalLine];
    }

    // Example EMA Calculation Function
    private function calculateEMA($prices, $period) {
        
        $k = 2 / ($period + 1);
        $ema = [];
        
        // Start with the first price for the first EMA value
        $ema[0] = floatval($prices[0]); 

        foreach ($prices as $i => $price) {
            if ($i == 0) continue; // Skip the first price
            $ema[$i] = ($price * $k) + ($ema[$i - 1] * (1 - $k));
        }

        return end($ema); // Return the last EMA value
    }

    private function calculateRSI($prices, $period) {
        $gains = [];
        $losses = [];

        // Calculate daily gains and losses
        for ($i = 1; $i < count($prices); $i++) {
            $change = $prices[$i] - $prices[$i - 1];
            if ($change > 0) {
                $gains[] = $change;
                $losses[] = 0;
            } else {
                $gains[] = 0;
                $losses[] = abs($change);
            }
        }

        // Calculate average gain and loss
        $avgGain = array_sum(array_slice($gains, -$period)) / $period;
        $avgLoss = array_sum(array_slice($losses, -$period)) / $period;

        // Calculate RS and RSI
        $rs = $avgLoss == 0 ? 0 : $avgGain / $avgLoss;
        $rsi = 100 - (100 / (1 + $rs));

        return $rsi;
    }

    
    public function checkStopLoss($currentPrice, $entryPrice, $stopLossPercent) {
        return $currentPrice <= $entryPrice * (1 - $stopLossPercent / 100);
    }

    public function getHistoricalPrices($symbol) {
        // Call the klines API to get historical data
        $response = Http::withHeaders([
            'X-COINS-APIKEY' => $this->coinsApiKey,
        ])->get('https://api.pro.coins.ph/openapi/quote/v1/klines', [
            'symbol' => $symbol,
            'interval' => '15m', // Adjust the interval as needed
            'startTime' => '',
            'endTime' => '',
            'limit' => 50      // Fetch the last 50 candles
        ]);
        
        // Process response to get closing prices
        $klines = $response->json();
        $closingPrices = $this->getClosingPrices($klines);
        return $closingPrices; // Convert to float
    }
    
    public function calculateSMA($prices, $period) {
        return array_sum(array_slice($prices, -$period)) / $period;
    }

    public function getClosingPrices($klines) {
        $prices = [];
    
        foreach ($klines as $kline) {
            // Assuming the closing price is at index 1
            $prices[] = floatval($kline[1]); // Convert to float for numerical calculations
        }
    
        return $prices;
    }
    
    
    
}
