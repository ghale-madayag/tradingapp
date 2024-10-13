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
       $tradeController = app('App\Http\Controllers\TradeController');
        
    //    $sell = $tradeController->checkSellSignal();
       
    //    $coins = $tradeController->getActiveCoins();
       
    //    $buy = $tradeController->checkBuySignal($coins);
      
    //    \Log::info("Sell Signal: ", $sell);
    //    \Log::info("Buy Signal: ", $buy);

    $userip = $tradeController->getBalance();

    \Log::info("Buy Signal: ", $userip);


        
    }
}
