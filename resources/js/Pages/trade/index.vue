<template>
    <Layout>

        <Head title="Tradeing App">
            <meta name="viewport" content="your content" />
        </Head>
        <PageHeader title="Trade" pageTitle="Dashboard" />
        <div class="row justify-content-start">
            <div class="col-xxl-3">
                <div class="card justify-content-start">
                    <div class="card-header border-0 align-items-center d-flex">
                        <h4 class="card-title mb-0 flex-grow-1">My Portfolio</h4>
                    </div><!-- end cardheader -->
                    <div class="card-body">
                        <div class="card card-animate">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="fw-semibold text-muted mb-0">Balance</p>
                                        <h2 class="mt-4 ff-secondary fw-semibold"><span class="counter-value">₱ {{
                                                balance }}</span></h2>
                                        <!-- <p class="mb-0 text-muted"><span class="badge bg-light text-success mb-0"> <i class="ri-arrow-up-line align-middle"></i> 16.24 % </span> vs. previous month</p> -->
                                    </div>
                                    <div>
                                        <div class="avatar-sm flex-shrink-0">
                                            <span class="avatar-title bg-info-subtle rounded-circle fs-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-users text-info">
                                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="9" cy="7" r="4"></circle>
                                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div><!-- end card body -->
                        </div>
                        <ul class="list-group list-group-flush border-dashed mb-0 mt-3 pt-2">
                            <li class="list-group-item px-0">
                                <div class="d-flex">
                                    <div class="flex-grow-1 ms-2">
                                        <h6 class="mb-1">Bitcoin</h6>
                                        <p class="fs-13 mb-0 text-muted"><i
                                                class="mdi mdi-circle fs-10 align-middle text-primary me-1"></i>BTC </p>
                                    </div>
                                    <div class="flex-shrink-0 text-end">
                                        <h6 class="mb-1">BTC 0.00584875</h6>
                                        <p class="text-success fs-13 mb-0">$19,405.12</p>
                                    </div>
                                </div>
                            </li><!-- end -->
                            <li class="list-group-item px-0">
                                <div class="d-flex">
                                    <div class="flex-grow-1 ms-2">
                                        <h6 class="mb-1">Ethereum</h6>
                                        <p class="fs-13 mb-0 text-muted"><i
                                                class="mdi mdi-circle fs-10 align-middle text-info me-1"></i>ETH </p>
                                    </div>
                                    <div class="flex-shrink-0 text-end">
                                        <h6 class="mb-1">ETH 2.25842108</h6>
                                        <p class="text-danger fs-13 mb-0">$40552.18</p>
                                    </div>
                                </div>
                            </li><!-- end -->
                            <li class="list-group-item px-0">
                                <div class="d-flex">
                                    <div class="flex-grow-1 ms-2">
                                        <h6 class="mb-1">Litecoin</h6>
                                        <p class="fs-13 mb-0 text-muted"><i
                                                class="mdi mdi-circle fs-10 align-middle text-warning me-1"></i>LTC </p>
                                    </div>
                                    <div class="flex-shrink-0 text-end">
                                        <h6 class="mb-1">LTC 10.58963217</h6>
                                        <p class="text-success fs-13 mb-0">$15824.58</p>
                                    </div>
                                </div>
                            </li><!-- end -->
                            <li class="list-group-item px-0 pb-0">
                                <div class="d-flex">
                                    <div class="flex-grow-1 ms-2">
                                        <h6 class="mb-1">Dash</h6>
                                        <p class="fs-13 mb-0 text-muted"><i
                                                class="mdi mdi-circle fs-10 align-middle text-success me-1"></i>DASH
                                        </p>
                                    </div>
                                    <div class="flex-shrink-0 text-end">
                                        <h6 class="mb-1">DASH 204.28565885</h6>
                                        <p class="text-success fs-13 mb-0">$30635.84</p>
                                    </div>
                                </div>
                            </li><!-- end -->
                        </ul><!-- end -->
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div>
            <div class="col-xxl-6">
                <div class="card">
                    <div class="card-header border-0 align-items-center d-flex">
                        <h4 class="card-title mb-0 flex-grow-1">Trade History</h4>
                    </div><!-- end cardheader -->
                    <div class="card-body">
                        <table class="table table-nowrap">
                            <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Pair</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Side</th>
                                    <th scope="col">Executed</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody v-for="trade in tradeHistory">
                                <tr>
                                    <td>{{ convertTimestamp(trade.time) }}</td>
                                    <td>{{ trade.symbol }}</td>
                                    <td>{{ trade.type }}</td>
                                    <td>{{ trade.side }}</td>
                                    <td>{{ trade.executedQty }}</td>
                                    <td>{{ trade.cummulativeQuoteQty }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-xxl-3">
                <div class="card justify-content-start"><!----><!---->
                    <div class="card-header align-items-center d-flex">
                        <h4 class="card-title mb-0 flex-grow-1">Top Performers</h4>
                        <div class="hstack gap-1"><button class="btn btn-sm btn-soft-info"
                                type="button">1H</button><button class="btn btn-sm btn-soft-info"
                                type="button">1D</button><button class="btn btn-sm btn-soft-info"
                                type="button">7D</button><button class="btn btn-sm btn-soft-primary"
                                type="button">1M</button></div>
                    </div>
                    <div class="card-body p-0"><!----><!---->
                        <ul class="list-group list-group-flush border-dashed mb-0">
                            <li class="list-group-item d-flex align-items-center">
                                <div class="flex-shrink-0"><img src="/image/crypto-icons/btc.svg"
                                        class="avatar-xs" alt=""></div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Bitcoin</h6>
                                    <p class="text-muted mb-0">$18.7 Billions</p>
                                </div>
                                <div class="flex-shrink-0 text-end">
                                    <h6 class="fs-14 mb-1">$12,863.08</h6>
                                    <p class="text-success fs-12 mb-0">+$67.21 (+4.33%)</p>
                                </div>
                            </li>
                            <li class="list-group-item d-flex align-items-center">
                                <div class="flex-shrink-0"><img src="/image/crypto-icons/eth.svg"
                                        class="avatar-xs" alt=""></div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Ethereum</h6>
                                    <p class="text-muted mb-0">$27.4 Billions</p>
                                </div>
                                <div class="flex-shrink-0 text-end">
                                    <h6 class="fs-14 mb-1">$08,256.04</h6>
                                    <p class="text-success fs-12 mb-0">+$51.19 (+5.64%)</p>
                                </div>
                            </li>
                            <li class="list-group-item d-flex align-items-center">
                                <div class="flex-shrink-0"><img src="/image/crypto-icons/aave.svg"
                                        class="avatar-xs" alt=""></div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Avalanche</h6>
                                    <p class="text-muted mb-0">$12.9 Billions</p>
                                </div>
                                <div class="flex-shrink-0 text-end">
                                    <h6 class="fs-14 mb-1">$11,896.13</h6>
                                    <p class="text-danger fs-12 mb-0">-$59.01 (-4.08%)</p>
                                </div>
                            </li>
                            <li class="list-group-item d-flex align-items-center">
                                <div class="flex-shrink-0"><img src="/image/crypto-icons//doge.svg"
                                        class="avatar-xs" alt=""></div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Dogecoin</h6>
                                    <p class="text-muted mb-0">$09.5 Billions</p>
                                </div>
                                <div class="flex-shrink-0 text-end">
                                    <h6 class="fs-14 mb-1">$15,999.06</h6>
                                    <p class="text-success fs-12 mb-0">+$74.05 (+3.12%)</p>
                                </div>
                            </li>
                            <li class="list-group-item d-flex align-items-center">
                                <div class="flex-shrink-0"><img src="/image/crypto-icons/bnb.svg"
                                        class="avatar-xs" alt=""></div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Binance</h6>
                                    <p class="text-muted mb-0">$14.2 Billions</p>
                                </div>
                                <div class="flex-shrink-0 text-end">
                                    <h6 class="fs-14 mb-1">$13,786.18</h6>
                                    <p class="text-danger fs-12 mb-0">-$61.05 (-9.22%)</p>
                                </div>
                            </li>
                            <li class="list-group-item d-flex align-items-center">
                                <div class="flex-shrink-0"><img src="/image/crypto-icons/ltc.svg"
                                        class="avatar-xs" alt=""></div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Litecoin</h6>
                                    <p class="text-muted mb-0">$09.5 Billions</p>
                                </div>
                                <div class="flex-shrink-0 text-end">
                                    <h6 class="fs-14 mb-1">$10,604.27</h6>
                                    <p class="text-success fs-12 mb-0">+$76.12 (+4.92%)</p>
                                </div>
                            </li>
                        </ul>
                    </div><!----><!---->
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup>
    import { Link, Head, router } from "@inertiajs/vue3";
    import Layout from "@/Layouts/main.vue";
    import PageHeader from "@/Components/page-header.vue";
    import { Inertia } from "@inertiajs/inertia";
    import { onMounted, onUnmounted } from 'vue';
    

    let props = defineProps({
        balance: String,
        tradeHistory: Object,
        message: String,
    })

    function convertTimestamp(ts) {
        const date = new Date(ts);
        return date.toLocaleString(); // Customize the format as needed
    }

    // onMounted(() => {
    //     // Function to trigger the job dispatch
    //     const buy = () => {
    //         // Inertia.post('/buy',{
    //         //     onSuccess: (data) => {
    //         //         console.log(data)
    //         //     },
    //         // })

    //         router.get('/buy', '')
    //     };

    //     const sell = () => {
    //         // Inertia.post('/sell',{
    //         //     onSuccess: (data) => {
    //         //         console.log(data)
    //         //     },
    //         // })

    //         router.get('/sell', '')

    //     };

    //     // Run triggerTradeSignal every 5 minutes (300,000 milliseconds)
    //     const intervalId = setInterval(buy, 300000); // 5 minutes in ms
    //     const sellValid = setInterval(sell, 60000);
    //     // Cleanup the interval when the component is unmounted
    //     onUnmounted(() => {
    //         clearInterval(intervalId);
    //         clearInterval(sellValid);
    //     });
    // });
 
</script>