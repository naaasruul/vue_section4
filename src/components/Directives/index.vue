<template>
    <div>
        <div v-awesome:red="textToRender"></div>
        <div v-awesome:blue="textToRender"></div>
        <div v-awesome="textToRender"></div>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const textToRender = ref('someText')
</script>