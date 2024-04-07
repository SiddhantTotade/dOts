<template>
    <div>
        <Card title="Sign Up">
            <form @submit.prevent="handleSubmit">
                <div v-for="(input, index) in inputFields" :key="index" class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" :for="input.label">
                        {{ input.label }}
                    </label>
                    <input v-model="formData[input.id]"
                        class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-slate-500"
                        :id="input.id" :type="input.type" :placeholder="input.placeholder">
                </div>
                <div class="mb-4 flex items-center">
                    <input v-model="tc" type="checkbox" class="mr-2">
                    <label for="agreeTerms" class="text-sm text-gray-700 font-bold">I agree to the Terms and
                        Conditions</label>
                </div>
                <button class="bg-sky-500 w-full text-white p-3 rounded-md">Register</button>
            </form>
            <div class="flex justify-center mt-2">
                <span class="text-sm">
                    Already have an account ?
                    <RouterLink class="font-bold text-sky-500" :to="{ 'name': 'signin' }">Login</RouterLink>
                </span>
            </div>
        </Card>
    </div>
</template>

<script>
import Card from '../components/common/Card.vue';
import { register } from '@/axios/register';

export default {
    components: {
        Card
    },
    data() {
        return {
            inputFields: [
                { id: "name", label: "Name", type: "text", placeholder: "Enter your name" },
                { id: "email", label: "Email", type: "email", placeholder: "Enter your email" },
                { id: "password", label: "Password", type: "password", placeholder: "Enter your password" },
                { id: "password2", label: "Confirm Password", type: "password", placeholder: "Confirm your password" },
            ],
            formData: {
                name: "",
                email: "",
                password: "",
                password2: ""
            },
            tc: false
        }
    },
    methods: {
        async handleSubmit() {
            if (!this.tc) {
                console.log("Please agree to terms and conditions");
            }

            try {
                const userData = await register(this.formData.name, this.formData.email, this.formData.password, this.formData.password2, this.tc)
                console.log(userData);
            }
            catch (err) {
                console.log("Registration failed", err);
            }
        }
    }
}
</script>