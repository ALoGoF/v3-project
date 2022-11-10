<!--
 * @Author: ce
 * @Date: 2022-11-08 10:48:30
 * @LastEditors: ce
 * @LastEditTime: 2022-11-10 15:22:38
 * @FilePath: /v3-project/src/views/HomeView.vue
-->
<script setup lang="ts">
import { useShopcarStore, shopcarStore } from "@/stores/shopcar";
// const shopcarStore = useShopcarStore();
</script>

<template>
  <main @click="shopcarStore.addShop">
    {{ shopcarStore.shops }}
  </main>
</template>

<style>
main {
  height: 100vh;
  width: 100%;
  line-height: 1;
}
</style>
