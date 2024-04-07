<template>
    <div>
        <h1>Email Verification</h1>
    </div>
</template>

<script>
import { verifyEmail } from '@/axios/verifyEmail';

export default {
    mounted() {
        const urlParams = new URLSearchParams(window.location.search);
        const uidb64 = urlParams.get('uidb64');
        const token = urlParams.get('token');

        this.sendDataToBackend(uidb64, token);
    },
    methods: {
        async sendDataToBackend(uidb64, token) {
            try {
                const response = await verifyEmail(uidb64, token);

                if (response.ok) {
                    console.log('Verification successful');
                } else {
                    console.error('Verification failed');
                }
            } catch (error) {
                console.error('Error occurred:', error);
            }
        }
    }
}
</script>