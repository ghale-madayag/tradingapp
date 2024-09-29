<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CheckBuySignal extends Command
{
    protected $signature = 'check:buysignal';
    protected $description = 'Check buy signals for coins under 5 PHP';
    
    public function handle()
    {
        // Assuming you have a trading service that contains your logic
        $tradingService = app()->make('App\Services\TradingService'); // Adjust path as necessary
        $tradingService->dashboard(); // Call your dashboard function
        
        $this->info('Buy signal check completed.');
    }
}
