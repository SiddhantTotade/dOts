<template>
    <div class="toast-container" :class="{ 'toast-visible': show }">
        <div
            v-bind:class="`toast-content bg-${bgColor}-500 font-bold text-white text-sm flex items-center p-5 rounded-full h-10 gap-2`">

            <div v-html="svg"></div>
            <span>{{ message }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        message: String,
        bgColor: String,
        svg: {
            type: String,
            required: true
        }
    },
    data() {
        return { show: false }
    },
    mounted() {
        this.show = true;

        setTimeout(() => {
            this.show = false;
        }, 3000);
    },
};
</script>

<style>
.toast-container {
    position: absolute;
    bottom: 20px;
    right: 20px;
    opacity: 0;
    transition: opacity 0.5s, transform 0.5s;
    transform: translateY(1%);
}

.toast-visible {
    opacity: 1;
    transform: translateX(0);
}
</style>
