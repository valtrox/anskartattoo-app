<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import { PlusCircleOutlined } from '@ant-design/icons-vue';

import { message } from 'ant-design-vue';
// import SignaturePad from 'signature_pad';
import dayjs from 'dayjs';

import FormUnder16 from '@/components/FormUnder16.vue';
import FileUpload from '@/components/FileUpload.vue';
import Signature from '@/components/Signature.vue';

import type { FormStateUnder16 } from '@/components/FormStateUnder16';
import type { Rule } from 'ant-design-vue/es/form';

import { submitForm } from '@/api';



interface FormState {
  nombre: string,
  apellidos: string;
  dni: string,
  fechaNacimiento: String,
  direccion: string,
  telefono: string //puede contener prefijo,
  email: string,
  poblacion: string,
  confirmacionLectura: boolean,
  fechaFirma: String,
  signatura: String,
  fotocopiaDni: any,
  consentimiento?: FormStateUnder16[],
}

const formState = reactive({} as FormState);
formState.consentimiento = [{}];

const accordionActiveTabId = ref([]);


const onFinish = async (values: any) => {

  // await submitForm(formState)
  console.log('Success:', formState);
};



const isUnder16 = computed(() => {
  const age = dayjs().diff(dayjs(formState.fechaNacimiento?.toString(), 'DD MM YYYY'), 'y');

  return age < 16;
});

const handleAddConsentPerson = () => {
  formState.consentimiento?.push({})
}

const rules: Record<string, Rule[]> = {

}

</script>
<template>
  <a-form :model="formState" name="basic" layout="horizontal" :label-col="{ span: 3, offset: 4 }"
    :wrapper-col="{ span: 5, offset: 1 }" autocomplete="off" @finish="onFinish">
    <a-form-item label="Nombre" name="nombre">
      <a-input v-model:value="formState.nombre"></a-input>
    </a-form-item>
    <a-form-item label="Apellidos" name="apellidos">
      <a-input v-model:value="formState.apellidos"></a-input>
    </a-form-item>
    <a-form-item label="DNI" name="dni">
      <a-input v-model:value="formState.dni"></a-input>
    </a-form-item>
    <a-form-item label="Fecha nacimiento" name="fechaNacimiento">
      <a-date-picker v-model:value="formState.fechaNacimiento" format="DD/MM/YYYY" value-format="DD/MM/YYYY"
        placeholder="Elige fecha" />
    </a-form-item>
    <a-form-item label="Dirección" name="direccion">
      <a-input v-model:value="formState.direccion"></a-input>
    </a-form-item>
    <a-form-item label="Teléfono" name="telefono">
      <a-input v-model:value="formState.telefono"></a-input>
    </a-form-item>
    <a-form-item label="Email" name="email">
      <a-input v-model:value="formState.email"></a-input>
    </a-form-item>
    <a-form-item label="Población" name="poblacion">
      <a-input v-model:value="formState.poblacion"></a-input>
    </a-form-item>

    <a-form-item label="Fecha firma" name="fechaFirma">
      <a-date-picker v-model:value="formState.fechaFirma" autocomplete="off" format="DD/MM/YYYY"
        value-format="DD/MM/YYYY" placeholder="Elige fecha" />
    </a-form-item>
    <a-form-item label="Firma" name="signatura" :wrapper-col="{ span: 8, offset: 1 }">
      <Signature v-model="formState.signatura" />
    </a-form-item>
    <a-form-item label="DNI" name="fotocopiaDni">
      <FileUpload v-model="formState.fotocopiaDni" />
    </a-form-item>
    <template v-if="isUnder16">
      <a-divider orientation="left">
        Consentimiento informado para menores y/o personas incapacitadas
      </a-divider>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-collapse v-model:activeKey="accordionActiveTabId" accordion>
          <a-collapse-panel v-for="(consent, idx) in formState.consentimiento" :key="idx"
            :header="`Persona tutora ${idx + 1}`">
            <FormUnder16 :consentFormState="consent" />
          </a-collapse-panel>
        </a-collapse>
      </a-form-item>
      <div class="tw-pb-8">
        <a-button type="primary" @click="handleAddConsentPerson">
          <span> Añadir persona</span>
          <template #icon>
            <plus-circle-outlined />
          </template>
        </a-button>
      </div>
    </template>
    <a-form-item name="confirmacionLectura" :wrapper-col="{ span: 12, offset: 6}">
      <div class="tw-flex">
        <a-checkbox v-model:checked="formState.confirmacionLectura"></a-checkbox>
        <p class="tw-pl-4 tw-text-left">Declaro haber leído y comprendido las informaciones dadas por este establecimiento, quedando enterado de las
          contraindicaciones y de los riesgos sanitarios que esta actuación comporta.</p>
      </div>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 4 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>