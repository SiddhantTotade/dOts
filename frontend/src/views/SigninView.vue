<script>
import { login } from '@/axios/login';
import { fingerprint, error } from '@/assets/svgs';
import Card from '../components/common/Card.vue';
import Toast from '@/components/common/Toast.vue';

export default {
    components: {
        Card, Toast
    },
    data() {
        return {
            inputFields: [
                { id: "email", label: "Email", type: "email", placeholder: "Enter your email" },
                { id: "password", label: "Password", type: "password", placeholder: "Enter your password" },
            ],
            formData: {
                email: "",
                password: ""
            },
            showToast: false,
            bgColor: undefined,
            svg: undefined,
            message: undefined
        }
    },
    methods: {
        async handleSubmit() {
            try {
                const status = await login(this.formData.email, this.formData.password)
                if (status === 200) {
                    this.showSuccessToast();
                }
                else if (status === 400) {
                    this.showErrorToast()
                }
            }
            catch (err) {
                this.showErrorToast()
            }
        },
        showSuccessToast() {
            this.showToast = true;
            this.bgColor = "green";
            this.svg = fingerprint;
            this.message = "Authentication successfull";

            setTimeout(() => {
                this.resetState();
            }, 3000);
        },
        showErrorToast() {
            this.showToast = true;
            this.bgColor = "red";
            this.svg = error;
            this.message = "Failed. Please check email and password";

            setTimeout(() => {
                this.resetState();
            }, 3000);
        },
        resetState() {
            this.showToast = false;
            this.bgColor = "";
            this.svg = "";
            this.formData.email = "";
            this.formData.password = "";
        }
    }
}
</script>

<template>
    <div>
        <Card title="Sign In">
            <form @submit.prevent="handleSubmit">
                <div v-for="(input, index) in inputFields" :key="index" class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        {{ input.label }}
                    </label>
                    <input v-model="formData[input.id]"
                        class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-slate-500"
                        :id="input.id" :type="input.type" :placeholder="input.placeholder">
                </div>
                <button class="bg-sky-500 w-full text-white p-3 rounded-md">Login</button>
            </form>
            <div class="flex justify-between mt-2">
                <RouterLink class="text-sm font-bold text-sky-500" to="/forgot-password">Forgot Password ?
                </RouterLink>
                <span class="text-sm">
                    Don't have an account ?
                    <RouterLink class="font-bold text-sky-500" :to="{ 'name': 'signup' }">Register</RouterLink>
                </span>
            </div>
        </Card>
    </div>
    <Toast v-if="showToast" :svg="svg" :bgColor="bgColor" :message="message" />
</template>
