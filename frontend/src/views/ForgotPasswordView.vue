<template>
    <div>
        <Card title="Forgot Password">
            <form @submit.prevent="handleSubmit">
                <div v-for="(input, index) in inputFields" :key="index" class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        {{ input.label }}
                    </label>
                    <input v-model="formData[input.id]"
                        class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-slate-500"
                        :id="input.id" :type="input.type" :placeholder="input.placeholder">
                </div>
                <button class="bg-sky-500 w-full text-white p-3 rounded-md">Send Email</button>
            </form>
        </Card>
    </div>
</template>

<script>
import Card from '../components/common/Card.vue';
import { resetPasswordEmail } from '@/axios/resetPasswordEmail';

export default {
    components: {
        Card
    },
    data() {
        return {
            inputFields: [
                { id: "email", label: "Email", type: "email", placeholder: "Enter your email" },
            ],
            formData: {
                email: "",
            }
        }
    },
    methods: {
        async handleSubmit() {
            try {
                const userData = await resetPasswordEmail(this.formData.email)
                console.log(userData);
            }
            catch (err) {
                console.log("Operation failed", err);
            }
        }
    }
}
</script>