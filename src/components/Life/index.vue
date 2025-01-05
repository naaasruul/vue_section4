<template>
    <div>
        {{ text }}
        <button @click="text = 'Changeed/'"> Trigger updated</button>

    </div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

const text = ref('SOme Text');

onBeforeMount(() => {
    console.log('1- onBeforeMounted')
})

onMounted(() => {
    console.log('2- onMounted')
})

onBeforeUpdate(() => {
    console.log('3- onBeforeUpdate')
})
onUpdated(() => {
    console.log('4- onUpdated')
})

onBeforeUnmount(() => {
    console.log('4- onBeforeUnmount')
})

onUnmounted(() => {
    console.log('4- onUnmount')
})
</script>