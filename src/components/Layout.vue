<template>
  <i-layout :style="layoutBackground">
    <i-layout-header>
      <p class="lead _font-family:monospace _float:right _margin:1">Home</p>
    </i-layout-header>
    <slot></slot>
    <i-layout-footer> Footer </i-layout-footer>
  </i-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    backgroundImage: {
      default: "",
    },
  },
  computed: {
    layoutBackground() {
      const a = {
        "background-size": "cover",
        "background-image": `url(${this.backgroundImage})`,
      };
      return a;
    },
  },
});
</script>
<style>
.layout {
  width: 100%;
  min-height: 100%;
}
</style>
