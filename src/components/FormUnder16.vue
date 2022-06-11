<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import FileUpload from '@/components/FileUpload.vue';
import Signature from '@/components/Signature.vue';

export interface FormStateUnder16 {
  nombre: string,
  apellidos: string;
  dniFile: any,
  signatura: string;
}

const props = defineProps({
  consentFormState: {
    type: Object,
    required: true,
  },
})


</script>
<template>
  <a-form-item label="Nombre" name="nombre"  :wrapper-col="{ offset: 2 }">
    <a-input v-model:value="consentFormState.nombre"></a-input>
  </a-form-item>
  <a-form-item label="Apellidos" name="apellidos" :wrapper-col="{ offset: 2 }">
    <a-input v-model:value="consentFormState.apellidos"></a-input>
  </a-form-item>
  <a-form-item label="DNI" name="dniFile" :wrapper-col="{ offset: 2 }">
    <FileUpload v-model="consentFormState.dniFile"/>
  </a-form-item>
  <a-form-item label="Firma" :wrapper-col="{ offset: 2 }">
    <Signature  v-model="consentFormState.signatura" />
  </a-form-item>
</template>