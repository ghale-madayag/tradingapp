<script>
import { Link, Head } from '@inertiajs/vue3';
import Layout from "@/Layouts/main.vue";
import PageHeader from "@/Components/page-header.vue";

export default {
  components: {
    Layout,
    PageHeader,
    Link, Head
  },
};
</script>

<template>
  <Layout>
    <Head title="Starter" />
    <PageHeader title="Starter" pageTitle="Pages" />
  </Layout>
</template>