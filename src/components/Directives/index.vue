<template>
    <div>
        <div v-awesome:red="textToRender"></div>
        <button @click="textToRender = 'something else'">
            Trigger update1
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const textToRender = ref('someText')
</script>