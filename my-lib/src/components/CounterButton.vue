<script lang="ts" setup>
import {useCounterStore} from "@/stores/counter";

const counterStore = useCounterStore();
</script>

<template>
  <v-btn :text="'count of ' + counterStore.count" @click="counterStore.increment()"/>
</template>
