<template>
  <i-textarea v-model="answer" class="answer" placeholder="Type something..">
    <template #prepend>
      <span>Answer :</span>
    </template>
  </i-textarea>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      answer: "",
    };
  },
});
</script>
<style lang="scss"></style>
