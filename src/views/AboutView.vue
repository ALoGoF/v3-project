<!--
 * @Author: ce
 * @Date: 2022-11-08 10:48:30
 * @LastEditors: ce
 * @LastEditTime: 2022-11-08 11:18:47
 * @FilePath: /v3-project/src/views/AboutView.vue
-->
<script lang="ts" setup>
import { counterStore } from "@/stores/counter";
</script>

<template>
  <div class="about" @click="counterStore.increment">
    <h1>This is an about page</h1>
    {{ counterStore.count }}
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
