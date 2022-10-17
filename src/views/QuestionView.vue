<template>
  <layout :background-image="require('../assets/second_bg.png')">
    <i-layout>
      <question-title :title="questions[currentQuestionIndex].title" />
      <question-options v-if="questions[currentQuestionIndex].type==='options'"  :options="questions[currentQuestionIndex].options"/>
    </i-layout>
    <i-button class="glassmorphism next-btn">Next</i-button>
  </layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import QuestionTitle from "@/components/QuestionTitle.vue";

export default defineComponent({
  data() {
    return {
      questions: [
        {
          title: "Are you an introvert",
          type: "options",
          options: [
            {
              id: "A",
              option: "yes",
            },
            {
              id: "B",
              option: "No",
            },
          ] as Option[],
        },
      ] as Question[],
      currentQuestionIndex: 0,
    };
  },
  components: { QuestionTitle },
});
</script>
<style>
.layout {
  color: white;
  position: absolute;
  justify-content: space-evenly;
}

.next-btn {
  width: 20%;
  margin-inline: auto;
  margin-top: 2em;
}
@media screen and (min-width: 600px) {
  .option-tall {
    grid-row: span 2 / auto;
  }
  .option-wide {
    grid-column: span 1 / auto;
  }
}
</style>
