<?php

namespace App\Console\Commands;

use App\Http\Controllers\TradeController;
use Illuminate\Console\Command;

class RunDashboard extends Command
{
    protected $signature = 'dashboard:run';
    protected $description = 'Run the dashboard logic to check buy signals for coins under 5 PHP';

    public function handle()
    {
        // Create an instance of TradeController
        $tradeController = new TradeController();

        // Call the dashboard function
        $coins = $tradeController->getAllCoinsUnder5PHP();
        $messages = $tradeController->checkBuySignal($coins);
        
        // Output the messages for confirmation
        foreach ($messages as $msg) {
            $this->info($msg);
        }
    }
}
