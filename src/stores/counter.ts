/*
 * @Author: ce
 * @Date: 2022-11-08 10:48:30
 * @LastEditors: ce
 * @LastEditTime: 2022-11-10 16:19:59
 * @FilePath: /v3-project/src/stores/counter.ts
 */
import { ref } from "vue";
import { defineStore } from "pinia";
import Store from "./index";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const increment = () => {
    count.value += 1;
  };
  return {
    increment,
    count,
  };
});

export const counterStore = useCounterStore(Store);
