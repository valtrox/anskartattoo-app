<template>
    <canvas ref="signaturePad" class="tw-w-full tw-border tw-bg-white"></canvas>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import SignaturePad from 'signature_pad';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const signaturePad = ref(null);
const signaturePadItem = ref(null);

onMounted(() => {
    const signaturePadElement = signaturePad.value;
    signaturePadItem.value = new SignaturePad(signaturePadElement);
    signaturePadItem.value.addEventListener('endStroke', () => {
        const signatureDataUrl = signaturePadItem.value.toDataURL();
        emit('update:modelValue', signatureDataUrl);
    })
})

</script>