<template>
    <h3>Steve is on</h3>
    <teleport to='body'>
        <Modal></Modal>
    </teleport>
</template>

<script setup>
import Modal from '@/components/Utils/modal.vue';
import { onUnmounted } from 'vue';

onUnmounted(() => {
    console.log('this is steve')
})
</script>