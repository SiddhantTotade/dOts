<template>
    <div class="flex justify-center items-center h-screen">
        <div class="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
            <h2 class="text-3xl text-center mb-4">{{ title }}</h2>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: String
    }
}
</script>