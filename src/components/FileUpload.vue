<script setup lang="ts">
import type { UploadChangeParam } from 'ant-design-vue';
import { InboxOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';

const props = defineProps({
  modelValue: Object,
});
const emit = defineEmits(['update:modelValue']);

const file = ref([]);

const handleChange = (info: UploadChangeParam) => {
  emit('update:modelValue', info);
  return false;
};

</script>

<template>
  <a-upload-dragger name="fotocopiaDni" v-model:fileList="file" :multiple="false"
    :before-upload="handleChange" :max-count="1">
    <p class="ant-upload-drag-icon">
      <inbox-outlined></inbox-outlined>
    </p>
    <p class="ant-upload-text">Haga clic o arrastre el archivo a esta área para cargarlo</p>
  </a-upload-dragger>
</template>