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
        // Your logic to check buy and sell signals
        $sell = app('App\Http\Controllers\TradeController')->checkSellSignal();
        $coins = app('App\Http\Controllers\TradeController')->getActiveCoins();
        $buy = app('App\Http\Controllers\TradeController')->checkBuySignal($coins);
       
        
        \Log::info("Sell Signal: ", $sell);
        \Log::info("Buy Signal: ", $buy);
        
    }
}
