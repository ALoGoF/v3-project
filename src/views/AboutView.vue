<!--
 * @Author: ce
 * @Date: 2022-11-08 10:48:30
 * @LastEditors: ce
 * @LastEditTime: 2022-11-10 16:21:18
 * @FilePath: /v3-project/src/views/AboutView.vue
-->
<script lang="ts" setup>
import { counterStore } from "@/stores/counter";
import { shopcarStore } from "@/stores/shopcar";
// const counterStore = useCounterStore();
// const shopcarStore = useShopcarStore();
const handleClick = () => {
  counterStore.count++;
};
</script>

<template>
  <div class="about" @click="handleClick">
    <h1>This is an about page</h1>
    {{ counterStore.count }}
    {{ shopcarStore.shops }}
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
