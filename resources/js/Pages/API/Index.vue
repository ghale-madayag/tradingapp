<script setup>
import Layout from "@/Layouts/main.vue";
import ApiTokenManager from '@/Pages/API/Partials/ApiTokenManager.vue';

defineProps({
    tokens: Array,
    availablePermissions: Array,
    defaultPermissions: Array,
});
</script>

<template>
    <Layout title="API Tokens">
        <BRow class="justify-content-center">
            <BCol lg="6">
                <ApiTokenManager :tokens="tokens" :available-permissions="availablePermissions" :default-permissions="defaultPermissions" />
            </BCol>
        </BRow>
    </Layout>
</template>
