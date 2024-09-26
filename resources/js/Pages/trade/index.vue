<template>
    <Layout>
        <Head title="Tradeing App">
            <meta name="viewport" content="your content" />
        </Head>
        <PageHeader title="Trade" pageTitle="Dashboard" />
        <div class="row">
            <div class="col-xxl-3">
                <div class="card card-height-100">
                    <div class="card-header border-0 align-items-center d-flex">
                        <h4 class="card-title mb-0 flex-grow-1">My Portfolio</h4>
                    </div><!-- end cardheader -->
                    <div class="card-body">
                        <div class="card card-animate">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="fw-semibold text-muted mb-0">Balance</p>
                                        <h2 class="mt-4 ff-secondary fw-semibold"><span class="counter-value">₱ {{ balance }}</span></h2>
                                        <!-- <p class="mb-0 text-muted"><span class="badge bg-light text-success mb-0"> <i class="ri-arrow-up-line align-middle"></i> 16.24 % </span> vs. previous month</p> -->
                                    </div>
                                    <div>
                                        <div class="avatar-sm flex-shrink-0">
                                            <span class="avatar-title bg-info-subtle rounded-circle fs-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users text-info"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
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
                                        <p class="fs-13 mb-0 text-muted"><i class="mdi mdi-circle fs-10 align-middle text-primary me-1"></i>BTC </p>
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
                                        <p class="fs-13 mb-0 text-muted"><i class="mdi mdi-circle fs-10 align-middle text-info me-1"></i>ETH </p>
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
                                        <p class="fs-13 mb-0 text-muted"><i class="mdi mdi-circle fs-10 align-middle text-warning me-1"></i>LTC </p>
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
                                        <p class="fs-13 mb-0 text-muted"><i class="mdi mdi-circle fs-10 align-middle text-success me-1"></i>DASH </p>
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
        </div>
    </Layout>
</template>

<script setup>
 import { Link, Head, router } from "@inertiajs/vue3";
 import Layout from "@/Layouts/main.vue";
 import PageHeader from "@/Components/page-header.vue";

 let props = defineProps({
    balance: String,
 })
</script>