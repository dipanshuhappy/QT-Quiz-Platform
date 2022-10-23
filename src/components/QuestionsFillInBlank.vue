<template>
  <div class="answer-input">
    <i-input v-model="answer" size="lg" placeholder="Type Your Answer">
      <template #prefix>Answer: </template>
    </i-input>
  </div>
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
<style lang="scss">
.answer-input {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
</style>
