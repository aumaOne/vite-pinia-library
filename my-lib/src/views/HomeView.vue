<script lang="ts" setup>
import CounterButton from "@/components/CounterButton.vue";
import {useCounterStore} from "@/stores/counter";
import {storeToRefs} from "pinia";

const counterStore = useCounterStore();
const {count} = storeToRefs(counterStore)
</script>

<template>
  <main>
    <CounterButton/>
    {{ count }}
  </main>
</template>
