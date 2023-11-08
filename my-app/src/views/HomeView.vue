<script lang="ts" setup>
import {CounterButton, useCounterStore} from "my-lib"
import {storeToRefs} from "pinia";

const counterStore = useCounterStore();
const {count} = storeToRefs(counterStore)

</script>

<template>
  <main>
    <div>
      <CounterButton/>
    </div>
    <div>Current Counter: {{ count }}</div>
  </main>
</template>
