<template>
    <div>
        <Card title="Reset Password">
            <form @submit.prevent="handleSubmit">
                <div v-for="(input, index) in inputFields" :key="index" class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        {{ input.label }}
                    </label>
                    <input v-model="formData[input.id]"
                        class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-slate-500"
                        :id="input.id" :type="input.type" :placeholder="input.placeholder">
                </div>
                <button class="bg-sky-500 w-full text-white p-3 rounded-md">Reset</button>
            </form>
        </Card>
    </div>
</template>

<script>
import Card from '../components/common/Card.vue';
import { resetPassword } from '@/axios/resetPassword';

export default {
    components: {
        Card
    },
    data() {
        return {
            inputFields: [
                { id: "password", label: "New Password", type: "password", placeholder: "Enter new password" },
                { id: "password2", label: "Confirm New Password", type: "password", placeholder: "Confirm your new password" },
            ],
            formData: {
                password: "",
                password2: ""
            }
        }
    },
    methods: {
        async handleSubmit() {
            const urlParams = new URLSearchParams(window.location.search);
            const uid = urlParams.get('uid');
            const token = urlParams.get('token');

            try {
                const response = await resetPassword(this.formData.password, this.formData.password2, uid, token);

                if (response.ok) {
                    console.log('Password reset successful');
                } else {
                    console.error('Operation failed');
                }
            } catch (error) {
                console.error('Error occurred:', error);
            }
        }
    }
}
</script>