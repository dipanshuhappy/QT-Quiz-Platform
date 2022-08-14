<template>
  <i-modal size="lg" v-model="isModalVisible" color="dark">
    <template #header>Quiz Pop Up</template>
    <div
      class="enter-quiz-id-wrapper _padding:2"
      :style="{
        'background-size': 'cover',
        'background-image': 'url(' + require('../assets/second_bg.png') + ')',
      }"
    >
      <i-input v-model="quizId" size="lg" placeholder="Type Quiz Id" />
      <i-button
        block
        class="glassmorphism _padding:1 _margin-y:4"
        @click="() => $router.push('take-quiz')"
        >Submit</i-button
      >
    </div>
  </i-modal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "EnterQuizIdModal",
  emits: ["update:showModal", "update:quizId"],
  props: {
    showModal: Boolean,
  },
  computed: {
    isModalVisible: {
      get(): boolean {
        return this.showModal;
      },
      set(value: boolean) {
        this.$emit("update:showModal", value);
      },
    },
  },
  data() {
    return {
      quizId: "",
    };
  },
});
</script>
<style>
.enter-quiz-id-wrapper {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
