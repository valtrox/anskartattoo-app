<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TheForm from './components/TheForm.vue'
</script>

<template>
  <a-layout>
    <!-- <a-layout-header>Header</a-layout-header> -->
    <a-layout-content class="tw-bg-white"><TheForm/></a-layout-content>
    <!-- <a-layout-footer class="tw-bg-black">Footer</a-layout-footer> -->
  </a-layout>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
