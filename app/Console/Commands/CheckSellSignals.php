<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CheckSellSignals extends Command
{
    protected $signature = 'sell:check';  // Define the command name
    protected $description = 'Check sell signals for coins every 5 minutes';

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $sell = app('App\Http\Controllers\TradeController')->checkSellSignal();
        \Log::info("Sell Signal: ", $sell);
    }
}
