<template>
    <h3>Mike is on</h3>
</template>

<script setup>
import { onUnmounted, onActivated, onDeactivated } from 'vue';

onUnmounted(() => {
    console.log('this is mike')
})
onActivated(() => {
    console.log('this is mike onActivated')
})

onDeactivated(() => {
    console.log('this is mike onDeactivated')
})
</script>