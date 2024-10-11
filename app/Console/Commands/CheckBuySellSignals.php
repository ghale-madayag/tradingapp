<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CheckBuySellSignals extends Command
{
    protected $signature = 'signals:check';  // Define the command name
    protected $description = 'Check buy and sell signals for coins every 10 minutes';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
    //    // Instantiate the TradeController once
    //    $tradeController = app('App\Http\Controllers\TradeController');
        
    //    // Check sell signals first
    //    $sell = $tradeController->checkSellSignal();
       
    //    // Then check active coins
    //    $coins = $tradeController->getActiveCoins();
       
    //    // Finally, check buy signals
    //    $buy = $tradeController->checkBuySignal($coins);
      
    //    // Log the signals
    //    \Log::info("Sell Signal: ", $sell);
    //    \Log::info("Buy Signal: ", $buy);

        \Log::info('Test Log');
        
    }
}
