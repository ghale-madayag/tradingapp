<?php

namespace App\Jobs;

use App\Http\Controllers\TradeController;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class CheckTradeSignalsJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        // Initialize your TradeController
        $tradeController = new TradeController();
        
        // Fetch the coins and check buy and sell signals
        $coins = $tradeController->getAllCoinsUnder5PHP();
        $buy = $tradeController->checkBuySignal($coins);
        //$sell = $tradeController->checkSellSignal();
        
        // You can log the results or handle them accordingly
        \Log::info("Buy Signal: ", $buy);
        //\Log::info("Sell Signal: ", $sell);
    }
}
