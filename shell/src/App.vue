<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const vPract = defineAsyncComponent(() => import("remote_one/vPract"));
</script>

<template>
  <h1>Hello from shell</h1>

  <v-pract></v-pract>
  
</template>
