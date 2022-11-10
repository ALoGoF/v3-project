/*
 * @Author: ce
 * @Date: 2022-11-08 14:10:11
 * @LastEditors: ce
 * @LastEditTime: 2022-11-10 16:15:19
 * @FilePath: /v3-project/src/stores/shopcar.ts
 */
import { ref } from "vue";
import { defineStore } from "pinia";
import Store from "./index";

export const useShopcarStore = defineStore("shopcar", () => {
  const shops = ref<number[]>([]);
  const addShop = () => {
    shops.value.push(shops.value.length);
  };

  return { shops, addShop };
});

export const shopcarStore = useShopcarStore(Store);
