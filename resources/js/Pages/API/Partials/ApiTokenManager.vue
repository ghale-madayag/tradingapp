<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import Checkbox from '@/Components/Checkbox.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';

const props = defineProps({
    tokens: Array,
    availablePermissions: Array,
    defaultPermissions: Array,
});

const createApiTokenForm = useForm({
    name: '',
    permissions: props.defaultPermissions,
});

const updateApiTokenForm = useForm({
    permissions: [],
});

const deleteApiTokenForm = useForm({});
const permissionModal = ref(false)
const displayingToken = ref(false);
const managingPermissionsFor = ref(null);
const apiTokenBeingDeleted = ref(null);
const apiTokenDeleteModal = ref(false);

const createApiToken = () => {
    createApiTokenForm.post(route('api-tokens.store'), {
        preserveScroll: true,
        onSuccess: () => {
            displayingToken.value = true;
            createApiTokenForm.reset();
        },
    });
};

const manageApiTokenPermissions = (token) => {
    updateApiTokenForm.permissions = token.abilities;
    managingPermissionsFor.value = token;
    permissionModal.value = true;
};

const updateApiToken = () => {
    updateApiTokenForm.put(route('api-tokens.update', managingPermissionsFor.value), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => (managingPermissionsFor.value = null, permissionModal.value = false),
    });
};

const confirmApiTokenDeletion = (token) => {
    apiTokenBeingDeleted.value = token;
    apiTokenDeleteModal.value = true;
};

const deleteApiToken = () => {
    deleteApiTokenForm.delete(route('api-tokens.destroy', apiTokenBeingDeleted.value), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => (apiTokenBeingDeleted.value = null, apiTokenDeleteModal.value = false),
    });
};
</script>

<template>
    <div>
        <!-- Generate API Token -->
        <FormSection @submitted="createApiToken" title="Create API Token" description="API tokens allow third-party services to authenticate with our application on your behalf.">

            <template #form>
                <!-- Token Name -->
                <div class="mb-3">
                    <InputLabel for="name" value="Name" />
                    <TextInput id="name" v-model="createApiTokenForm.name" type="text" autofocus :class="{ 'is-invalid': createApiTokenForm.errors.name }" />
                    <InputError :message="createApiTokenForm.errors.name" class="mt-2" />
                </div>

                <!-- Token Permissions -->
                <div v-if="availablePermissions.length > 0" class="">
                    <InputLabel for="permissions" value="Permissions" />

                    <div v-for="permission in availablePermissions" :key="permission">
                        <label class="d-flex align-items-center">
                            <Checkbox v-model:checked="createApiTokenForm.permissions" :value="permission" />
                            <span class="ms-2 text-sm text-muted">{{ permission }}</span>
                        </label>
                    </div>
                </div>
            </template>

            <template #actions>
                <BButton variant="success w-100" type="submit" :class="{ 'opacity-25': createApiTokenForm.processing }" :disabled="createApiTokenForm.processing">Create</BButton>
                <p v-if="createApiTokenForm.recentlySuccessful" class="alert alert-success mt-3">Created.</p>
            </template>
        </FormSection>

        <div v-if="tokens.length > 0">
            <!-- Manage API Tokens -->
            <BCard no-body>
                <BCardHeader>
                    <BCardTitle>Manage API Tokens</BCardTitle>
                    <p class="text-muted mb-0">You may delete any of your existing tokens if they are no longer needed.</p>
                </BCardHeader>

                <!-- API Token List -->
                <BCardBody class="p-4">
                    <div v-for="token in tokens" :key="token.id" class="d-flex align-items-center justify-content-between mb-2">
                        <div class="break-all">
                            {{ token.name }}
                        </div>

                        <div class="d-flex align-items-center ms-2">
                            <div v-if="token.last_used_ago" class="text-sm text-muted">
                                Last used {{ token.last_used_ago }}
                            </div>

                            <BButton variant="info" v-if="availablePermissions.length > 0" class="btn-sm me-1" @click="manageApiTokenPermissions(token)">
                                Permissions
                            </BButton>

                            <BButton variant="danger" class="btn-sm" @click="confirmApiTokenDeletion(token)">
                                Delete
                            </BButton>
                        </div>
                    </div>
                </BCardBody>
            </BCard>
        </div>

        <!-- Token Value Modal -->
        <BModal v-model="displayingToken" title="API Token" hide-footer header-class="bg-success-subtle p-3">
            <p class="fs-14 text-muted">Please copy your new API token. For your security, it won't be shown again.</p>
            <div v-if="$page.props.jetstream.flash.token" class="mt-4 rounded mb-4">
                <pre class="language-markup"><code>{{ $page.props.jetstream.flash.token }}</code></pre>
            </div>
            <div class="text-end">
                <BButton variant="danger" @click="displayingToken = false">Cancel</BButton>
            </div>
        </BModal>

        <!-- API Token Permissions Modal -->
        <BModal v-model="permissionModal" title="API Token Permissions" hide-footer>
            <div v-for="permission in availablePermissions" :key="permission">
                <label class="d-flex align-items-center">
                    <Checkbox v-model:checked="updateApiTokenForm.permissions" :value="permission" />
                    <span class="ms-2 text-sm text-muted">{{ permission }}</span>
                </label>
            </div>
            <div class="text-end">
                <BButton variant="danger" @click="permissionModal = !permissionModal">Cancel</BButton>
                <BButton variant="success" class="ms-1" :class="{ 'opacity-25': updateApiTokenForm.processing }" :disabled="updateApiTokenForm.processing" @click="updateApiToken">Save</BButton>
            </div>
        </BModal>

        <!-- Delete Token Confirmation Modal -->
        <BModal v-model="apiTokenDeleteModal" title="Delete API Token" header-class="bg-danger-subtle p-2"  hide-footer>
            <p class="fs-14">Are you sure you would like to delete this API token?</p>
            <div class="text-end">
                <BButton variant="danger" class="btn-sm" @click="apiTokenDeleteModal = !apiTokenDeleteModal">Cancel</BButton>
                <BButton variant="success" class="ms-1 btn-sm" :class="{ 'opacity-25': deleteApiTokenForm.processing }" :disabled="deleteApiTokenForm.processing" @click="deleteApiToken">Delete</BButton>
            </div>
        </BModal>
    </div>
</template>