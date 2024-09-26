<script>
import { Link, Head } from '@inertiajs/vue3';
export default {
    components: {
        Link, Head
    }
};
</script>

<template>
    <Head title="500" />
    <div class="auth-page-wrapper py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div class="auth-page-content overflow-hidden p-0">
            <BContainer fluid>
                <BRow class="justify-content-center">
                    <BCol xl="4" class="text-center">
                        <div class="error-500 position-relative">
                            <img src="@assets/images/error500.png" alt="" class="img-fluid error-500-img error-img" />
                            <h1 class="title text-muted">500</h1>
                        </div>
                        <div>
                            <h3>Internal Server Error!</h3>
                            <p class="text-muted w-75 mx-auto">Server Error 500. We're not exactly sure what happened,
                                but our servers say something is wrong.</p>
                            <Link href="/" class="btn btn-success"><i class="mdi mdi-home me-1"></i>Back to home
                            </Link>
                        </div>
                    </BCol>
                </BRow>
            </BContainer>
        </div>
    </div>
</template>