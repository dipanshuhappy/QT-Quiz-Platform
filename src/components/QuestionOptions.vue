<template>
  <div class="options">
    <div
      class="option glassmorphism"
      v-for="(option, index) in options"
      :key="index"
    >
      {{ option?.id }}. {{ option?.option }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
export default defineComponent({
  props: {
    options: Object as PropType<Option[]>,
  },
});
</script>
<style>
.options {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: 240px;
}
.option {
  display: grid;
  place-content: center;
  place-self: center;
  width: 50%;
  height: 50%;
}
</style>
