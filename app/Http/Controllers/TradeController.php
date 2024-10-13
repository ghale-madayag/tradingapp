<?php

namespace App\Http\Controllers;

use App\Jobs\CheckTradeSignalsJob;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class TradeController extends Controller
{
    private $coinsApiKey = '6rOVV3vIx7obo98Otfxc77WTu0oGufz8n3I87ZJ7Cr5FcfBsB9HcULsAiv1YHZJh';
    private $coinsSecret = 'D5969nmVjjW3702c1wM1n5NSahGZ7Jgc2c5j45EKbCqwwcVy5cPTiVzVSdif4Ej2';
    private $baseUrl = 'https://api.pro.coins.ph';

    public function dashboard()
    {
        CheckTradeSignalsJob::dispatch()->onQueue('default');
        $tradeHistory = $this->orderHistory();

        return Inertia::render('trade/index',[
            'balance' => $this->getBalance(),
            'tradeHistory' => $tradeHistory,
        ]);
    }


    public function getBalance(){
        $pathBal = '/openapi/v1/account';
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

        $coinsUnder5PHP = collect($coins)->filter(function ($coin) {
            return floatval($coin['lastPrice']) <= 5 
                && strpos($coin['symbol'], 'PHP') !== false  // Ensure the coin is in PHP
                && floatval($coin['volume']) > 0;  // Ensure that the coin has some trading volume
        })->take(20); 
    
        return $coinsUnder5PHP;  // Return the filtered list
    }

    public function getUserIP(){
        $path = 'https://api.pro.coins.ph/openapi/v1/user/ip';
    
        // Fetch the coin data from the API
        $response = Http::withHeaders([
            'X-COINS-APIKEY' => $this->coinsApiKey,
        ])->get($path);
    
        $result = $response->json();  // Parse the JSON response

        return $result;  // Return the filtered list
    }


    public function getAllCoins(){
        $path = 'https://api.pro.coins.ph/openapi/quote/v1/ticker/24hr';
    
        // Fetch the coin data from the API
        $response = Http::withHeaders([
            'X-COINS-APIKEY' => $this->coinsApiKey,
        ])->get($path);
    
        $coins = $response->json();  // Parse the JSON response

        $coinsUnder5PHP = collect($coins)->filter(function ($coin) {
            return strpos($coin['symbol'], 'PHP') !== false;  // Ensure that the coin has some trading volume
        }); 
    
        return $coinsUnder5PHP;  // Return the filtered list
    }

    public function getActiveCoins($minVolume = 10000) {
        $coins = $this->getAllCoins();  // Fetch all coins data from the API
    
        $filteredCoins = [];
        foreach ($coins as $coin) {
            $symbol = $coin['symbol'];
            $price = floatval($coin['lastPrice']);
            $volume = floatval($coin['volume']);  // Assuming volume data is available in the API response
    
            // Filter coins based on trade volume
            if ($volume >= $minVolume) {
                $filteredCoins[] = $coin;
            }
        }
    
        return $filteredCoins;
    }
    

    public function getCoinsInBalance() {
        $pathBal = '/openapi/v1/account';
        $timestamp = time() * 1000;

        $queryParams = 'timestamp=' . $timestamp;
        
        $stringToSign = $queryParams;
    
        $secret = $this->coinsSecret;

        $signature = hash_hmac('sha256', $stringToSign, $secret);

        $queryParamsWithSignature = $queryParams . '&signature=' . $signature;

        $urlBal= $this->baseUrl . $pathBal . '?' . $queryParamsWithSignature;
        // Fetch the account data from the API
        $response = Http::withHeaders([
            'X-COINS-APIKEY' => $this->coinsApiKey,
        ])->get($urlBal);
    
        $accountData = $response->json();  // Parse the JSON response
        //dd($accountData);
        // Prepare an array to hold assets with 'PHP' appended
        $coinsInBalance = [];
    
        foreach ($accountData['balances'] as $asset) {
            // Check if the free balance is greater than 0
            if (floatval($asset['free']) > 1) {
                // Append 'PHP' to the asset symbol
                $coinWithPHP = $asset['asset'] . 'PHP';
    
                // Store the asset with its free and locked balance
                $coinsInBalance[] = [
                    'asset' => $coinWithPHP,
                    'free' => $asset['free'],
                    'locked' => $asset['locked'],
                ];
            }
        }
    
        return $coinsInBalance;  // Return the list of coins in balance
    }

    public function getMatchingCoins() {
        // Get all available coins
        $allCoins = $this->getAllCoins();
        // Get coins in balance
        $coinsInBalance = $this->getCoinsInBalance();
    
        // Extract symbols from coins in balance (removing 'PHP' for matching)
        $balanceSymbols = collect($coinsInBalance)->pluck('asset')->map(function ($symbol) {
            return $symbol;
        })->toArray();
    
        // Filter all coins to find matches
        $matchingCoins = collect($allCoins)->filter(function ($coin) use ($balanceSymbols) {
            // Check if the symbol without 'PHP' exists in the balance symbols
            return in_array($coin['symbol'], $balanceSymbols);
        });
    
        return $matchingCoins;  // Return the matching coins
    }
   

    public function checkBuySignal($coin) {
        $msg = [];
        $entryPrices = [];  // Track entry prices for each coin
        
        foreach ($coin as $coinData) {
            $entryPrice = floatval($coinData['lastPrice']);
            $symbol = $coinData['symbol'];
            
            // Fetch historical prices
            $historicalPrices = $this->getHistoricalPrices($symbol);
            $currentPrice = floatval($coinData['lastPrice']);
            
            // Calculate MACD and RSI
            $macd = $this->calculateMACD($historicalPrices);
            $rsi = $this->calculateRSI($historicalPrices, 9); // 14-period RSI
            
            // Check balance
            $balance = $this->getBalance();  // Function to get your total balance in your base currency (e.g., USD)
            $minAmountToBuy = $this->getMinAmountToBuy($symbol);  // Fetch minimum amount required to buy the coin
            
            // Check if enough balance to buy at least the minimum amount
            if ($balance < ($minAmountToBuy * $currentPrice)) {
                $msg[] = "Not enough balance to buy " . $symbol . "\n";
                continue; // Skip to the next coin if balance is insufficient
            }
    
            // Check if you already hold the coin (ensure the balance is zero for this coin)
            $coinBalance = $this->getCoinBalance($symbol);  // Function to check the balance of this particular coin
            if ($coinBalance > 4) {
                $msg[] = "Already holding " . $symbol . "\n";
                continue; // Skip if you already have some of this coin
            }
            
            // Entry Conditions
            $buySignal = $macd['signal'] > 0 && $rsi < 30; // Buy if MACD is positive and RSI is oversold
            
            // Execute Buy Signal
            if ($buySignal && !isset($entryPrices[$symbol])) {
                // Get the minimum amount allowed for this symbol
                $minAmountToBuy = $this->getMinAmountToBuy($symbol);  // Implement this to get the minimum amount
                
                // Automatically calculate how much to buy based on available balance
                $amountToBuy = floor($balance / $currentPrice);  // Buy as much as possible with available balance
                
                // Ensure that the amount to buy is at least the minimum amount
                if ($amountToBuy < $minAmountToBuy) {
                    $msg[] = "Not enough balance to buy the minimum amount of " . $symbol . ". Minimum required: " . $minAmountToBuy . "\n";
                    continue;
                }
            
                // Cast the amount to an integer for a whole number
                $amountToBuy = (int) $amountToBuy;
            
                // Proceed to place the buy order
                //$msg[] = "Buying " . $symbol . " at price " . $currentPrice . " with amount " . $amountToBuy . "\n";
                $msg[] = $this->placeOrderBuy($symbol, 'buy', 'market', $amountToBuy);
                $entryPrices[$symbol] = $currentPrice;  // Store the entry price for future reference
            }
            

            //Call the sell signal check for the current coin
            //$sellMessages = $this->checkSellSignal();
            //$msg = array_merge($msg, $sellMessages); // Merge sell messages into the main message array

        }
    
        return $msg;
    }


    public function checkSellSignal() {
        $msg = [];
        $coinData = $this->getMatchingCoins(); // Assuming this returns an array of coins you want to check
        
        foreach ($coinData as $coin) {
            $symbol = $coin['symbol'];
            
            // Fetch the recent orders to get the executed price
            $recentOrders = $this->getRecentOrders($symbol);
            if (!empty($recentOrders)) {
                $executedPrice = $this->getExecutedPrice($recentOrders[0]); // Your executed price from filled order
                // Fetch current market price
                $currentPrice = floatval($coin['lastPrice']);
                // Calculate MACD and RSI
                $historicalPrices = $this->getHistoricalPrices($symbol);
                $macd = $this->calculateMACD($historicalPrices);
                $rsi = $this->calculateRSI($historicalPrices, 9); // 14-period RSI

                $sellSignal = $macd['signal'] < 0 && $rsi > 70;
    
                //Only proceed if sell signal is true
                if ($sellSignal) {
                    // Example: Calculate a profit target of 5%
                    $profitTarget = $executedPrice * 1.05; // 5% profit
                    // Example: Calculate a stop-loss threshold of 5%
                    $stopLossThreshold = $executedPrice * 0.95; // 5% loss

                    
                    // Get the available balance of the coin
                    $amountToSell = (int) $this->getCoinBalance($symbol);

                    $msg[] = (($currentPrice >= $profitTarget || $currentPrice <= $stopLossThreshold) && $amountToSell > 0);
    
                    // Check if the current price meets either the profit target or stop-loss condition
                    if (($currentPrice >= $profitTarget || $currentPrice <= $stopLossThreshold) && $amountToSell > 0) {
                        //$msg[] = "Selling " . $symbol . " at price " . $currentPrice . "\n";
                        $msg[] = $this->placeOrderSell($symbol, 'sell', 'market', $amountToSell); // Sell all available units
                    } else if ($amountToSell <= 0) {
                        $msg[] = "No balance to sell for " . $symbol . "\n"; // Handle case where there's no balance
                    }
                }
            } else {
                $msg[] = "No recent orders for " . $symbol . "\n";
            }
        }
    
        return $msg;
    }
    

    public function getRecentOrders($symbol) {
        $path = '/openapi/v1/historyOrders';  // Coins.ph API endpoint for placing orders
        // Get the current timestamp
        $timestamp = time() * 1000;
    
        // Concatenate the query parameters as a string
        $queryParams = 'symbol='.$symbol.
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

        $order =  $response->json();
        
        usort($order, function ($a, $b) {
            return $b['time'] <=> $a['time']; // Change 'time' to the actual field name in your API response
        });
        // Return the API response
        return $order;
    }

    public function getExecutedPrice($order)
    {
        if (isset($order['price']) && isset($order['executedQty']) && $order['executedQty'] > 0) {
            // Calculate the executed price if needed; otherwise, just return the price
            return floatval($order['cummulativeQuoteQty']) / floatval($order['executedQty']);
        }

        return null;
    }

    public function getMinAmountToBuy($symbol) {
        // Fetch trading rules from the exchange API for the given symbol
        $rules = $this->getTradingRules($symbol);
        
        // Ensure that filters exist in the rules
        if (isset($rules['filters'])) {
            // Loop through the filters to find the "LOT_SIZE" filter and extract "minQty"
            foreach ($rules['filters'] as $filter) {
                if (isset($filter['filterType']) && $filter['filterType'] === 'LOT_SIZE') {
                    return floatval($filter['minQty']); // Convert to float for calculations
                }
            }
        }
        
        // Log or handle the case where LOT_SIZE filter is not found
        error_log("LOT_SIZE filter not found for symbol: " . $symbol);
        
        // Set a default minimum amount if the LOT_SIZE filter is not found
        return 0.01;  // Default fallback, but should be avoided
    }

    public function getTradingRules($symbol) {
        // API call to fetch the symbol's trading info (using your exchange's API)
        $apiEndpoint = $this->baseUrl."/openapi/v1/exchangeInfo?symbol=" . $symbol;
        $response = file_get_contents($apiEndpoint); // Make an API request (you might need to use cURL instead)
        $data = json_decode($response, true); // Decode the JSON response
        
       // Extract the specific trading rules for the symbol (structure may vary depending on the API)
       foreach ($data['symbols'] as $market) {
            if ($market['symbol'] === $symbol) {
                return $market;  // Return the trading rules for this symbol
            }
        }
        // Return null or handle error if symbol not found
        return null;
    }

    public function getCoinBalance($symbol) {
        // Fetch all balances from the exchange API
        $baseAsset = $this->getBaseAsset($symbol);
        
        $balances = $this->getAllBalances();
        
        // Loop through the balances to find the one for the requested symbol
        foreach ($balances as $balance) {
            if ($balance['asset'] === $baseAsset) {
                return floatval($balance['free']);  // Return the available balance (not locked)
            }
        }
        
        // If the symbol is not found, return 0 as the default balance
        return 0;
    }

    // Function to extract base asset from the symbol (e.g., BTCPHP => BTC)
    public function getBaseAsset($symbol) {
       // Check if the symbol ends with 'PHP'
        if (substr($symbol, -3) === 'PHP') {
            // Remove the 'PHP' suffix and return the base asset
            return substr($symbol, 0, -3);
        }
        
        return $symbol;
    }

    public function placeOrderBuy($symbol, $side, $type, $qty) {
        $path = '/openapi/v1/order';  // Coins.ph API endpoint for placing orders
    
        // Get the current timestamp
        $timestamp = $this->serverTime();
    
        $queryParamsArray = [
            'symbol' => $symbol,
            'side' => $side,
            'type' => $type,
            'quoteOrderQty' => 90,
            'timestamp' => $timestamp,
        ];
    
        // Build the query string
        $queryParams = http_build_query($queryParamsArray);
    
        // Generate the HMAC signature using the API secret
        $signature = hash_hmac('sha256', $queryParams, $this->coinsSecret);
    
        // Append the signature to the query string
        $queryParams .= '&signature=' . $signature;
        // Build the final URL
        $url = $this->baseUrl . $path . '?' . $queryParams;
    
        // Create a Guzzle HTTP client
        $client = new Client();
    
        try {
            // Make the HTTP request
            $response = $client->post($url, [
                'headers' => [
                    'X-COINS-APIKEY' => $this->coinsApiKey,
                ],
            ]);
    
            // Check for a successful response
            if ($response->getStatusCode() === 200) {
                return json_decode($response->getBody(), true);  // Return the API response
                //return 'Buying: '. $symbol;
            } else {
                // Handle error (e.g., log the error, return an error message)
                return [
                    'error' => true,
                    'message' => 'Failed to place order: ' . $response->getBody()
                ];
            }
        } catch (RequestException $e) {
            // Handle Guzzle request exceptions
            return [
                'error' => true,
                'message' => 'Failed to place order: ' . $e->getMessage()
            ];
        }
    }

    public function placeOrderSell($symbol, $side, $type, $qty) {
        $path = '/openapi/v1/order';  // Coins.ph API endpoint for placing orders
    
        // Get the current timestamp
        $timestamp = $this->serverTime();
    
        $queryParamsArray = [
            'symbol' => $symbol,
            'side' => $side,
            'type' => $type,
            'quantity' => $qty,
            'timestamp' => $timestamp,
        ];
    
        // Build the query string
        $queryParams = http_build_query($queryParamsArray);
    
        // Generate the HMAC signature using the API secret
        $signature = hash_hmac('sha256', $queryParams, $this->coinsSecret);
    
        // Append the signature to the query string
        $queryParams .= '&signature=' . $signature;
    
        // Build the final URL
        $url = $this->baseUrl . $path . '?' . $queryParams;
    
        // Create a Guzzle HTTP client
        $client = new Client();
    
        try {
            // Make the HTTP request
            $response = $client->post($url, [
                'headers' => [
                    'X-COINS-APIKEY' => $this->coinsApiKey,
                ],
            ]);
    
            // Check for a successful response
            if ($response->getStatusCode() === 200) {
                return json_decode($response->getBody(), true);  // Return the API response
            } else {
                // Handle error (e.g., log the error, return an error message)
                return [
                    'error' => true,
                    'message' => 'Failed to place order: ' . $response->getBody()
                ];
            }
        } catch (RequestException $e) {
            // Handle Guzzle request exceptions
            return [
                'error' => true,
                'message' => 'Failed to place order: ' . $e->getMessage()
            ];
        }
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
        $queryParams = 'symbol='.
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

        $order =  $response->json();
        
        usort($order, function ($a, $b) {
            return $b['time'] <=> $a['time']; // Change 'time' to the actual field name in your API response
        });
        // Return the API response
        return $order;
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

    
    //Strategy

    public function calculateMACD($prices, $shortTermPeriod = 6, $longTermPeriod = 13, $signalPeriod = 5)
    {
        // Calculate the short-term and long-term EMAs for all price points
        $emaShort = $this->calculateEMA($prices, $shortTermPeriod);
        $emaLong = $this->calculateEMA($prices, $longTermPeriod);
        
        // Calculate MACD values as the difference between short-term and long-term EMAs
        $macd = [];
        $length = min(count($emaShort), count($emaLong));
        for ($i = 0; $i < $length; $i++) {
            $macd[] = $emaShort[$i] - $emaLong[$i];
        }

        // Calculate Signal Line as EMA of MACD values
        $signalLine = $this->calculateEMA($macd, $signalPeriod);

        // Return the latest MACD and Signal Line values
        return [
            'macd' => end($macd),        // Latest MACD value
            'signal' => end($signalLine) // Latest Signal Line value
        ];
    }


    public function calculateEMA($prices, $period)
    {
        $ema = [];
        $multiplier = 2 / ($period + 1);
        // First EMA value is simply the SMA (Simple Moving Average)
        $ema[] = array_sum(array_slice($prices, 0, $period)) / $period;
        
        // Calculate subsequent EMA values
        for ($i = $period; $i < count($prices); $i++) {
            $ema[] = (($prices[$i] - end($ema)) * $multiplier) + end($ema);
        }

        return $ema;
    }

    private function calculateRSI($prices, $period)
    {
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

        // First, calculate the average gain and loss for the first 'period'
        $avgGain = array_sum(array_slice($gains, 0, $period)) / $period;
        $avgLoss = array_sum(array_slice($losses, 0, $period)) / $period;

        // Then, calculate subsequent smoothed averages for the remaining prices
        for ($i = $period; $i < count($gains); $i++) {
            $avgGain = (($avgGain * ($period - 1)) + $gains[$i]) / $period;
            $avgLoss = (($avgLoss * ($period - 1)) + $losses[$i]) / $period;
        }

        // Calculate the final RS and RSI
        $rs = $avgLoss == 0 ? 0 : $avgGain / $avgLoss;
        $rsi = 100 - (100 / (1 + $rs));

        return $rsi;
    }



    // public function calculateMACD($prices, $shortTermPeriod = 6, $longTermPeriod = 13, $signalPeriod = 5) {
    //     $emaShort = $this->calculateEMA($prices, $shortTermPeriod);
    //     $emaLong = $this->calculateEMA($prices, $longTermPeriod);
    //     $macd = $emaShort - $emaLong;
    
    //     // Calculate Signal Line
    //     $signalLine = $this->calculateEMA(array_slice($prices, -$signalPeriod), $signalPeriod); // Signal line from MACD values
    
    //     return ['macd' => $macd, 'signal' => $signalLine];
    // }

    // Example EMA Calculation Function
    // private function calculateEMA($prices, $period) {
        
    //     $k = 2 / ($period + 1);
    //     $ema = [];
        
    //     // Start with the first price for the first EMA value
    //     $ema[0] = floatval($prices[0]); 

    //     foreach ($prices as $i => $price) {
    //         if ($i == 0) continue; // Skip the first price
    //         $ema[$i] = ($price * $k) + ($ema[$i - 1] * (1 - $k));
    //     }

    //     return end($ema); // Return the last EMA value
    // }

    // private function calculateRSI($prices, $period) {
    //     $gains = [];
    //     $losses = [];

    //     // Calculate daily gains and losses
    //     for ($i = 1; $i < count($prices); $i++) {
    //         $change = $prices[$i] - $prices[$i - 1];
    //         if ($change > 0) {
    //             $gains[] = $change;
    //             $losses[] = 0;
    //         } else {
    //             $gains[] = 0;
    //             $losses[] = abs($change);
    //         }
    //     }

    //     // Calculate average gain and loss
    //     $avgGain = array_sum(array_slice($gains, -$period)) / $period;
    //     $avgLoss = array_sum(array_slice($losses, -$period)) / $period;

    //     // Calculate RS and RSI
    //     $rs = $avgLoss == 0 ? 0 : $avgGain / $avgLoss;
    //     $rsi = 100 - (100 / (1 + $rs));

    //     return $rsi;
    // }

    
    public function checkStopLoss($currentPrice, $entryPrice, $stopLossPercent) {
        return $currentPrice <= $entryPrice * (1 - $stopLossPercent / 100);
    }

    public function getHistoricalPrices($symbol) {
        // Call the klines API to get historical data
        $response = Http::withHeaders([
            'X-COINS-APIKEY' => $this->coinsApiKey,
        ])->get('https://api.pro.coins.ph/openapi/quote/v1/klines', [
            'symbol' => $symbol,
            'interval' => '5m', // Adjust the interval as needed
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
    
    public function getAllBalances(){
        $pathBal = '/openapi/v1/account';
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


        $responce = $resBal->json();

        return $responce['balances'];
    }
    
    
}
