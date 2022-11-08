<!--
 * @Author: ce
 * @Date: 2022-11-08 10:48:30
 * @LastEditors: ce
 * @LastEditTime: 2022-11-08 11:31:08
 * @FilePath: /v3-project/src/views/HomeView.vue
-->
<script setup lang="ts">
import { counterStore } from "@/stores/counter";
</script>

<template>
  <main @click="counterStore.increment">
    {{ counterStore.count }}
  </main>
</template>

<style>
main {
  height: 100vh;
  width: 100%;
  line-height: 1;
}
</style>
