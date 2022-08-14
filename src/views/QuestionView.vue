<template>
  <layout :background-image="require('../assets/second_bg.png')">
    <i-layout>
      <div class="question-and-option">
        <div class="glassmorphism question">Are you introvert/extrovert?</div>
      </div>
      <div class="options">
        <div
          class="option glassmorphism"
          v-for="(option, index) in options"
          :key="index"
        >
          {{ option.option }}
        </div>
      </div>
    </i-layout>
  </layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      options: [
        {
          option: "Introvert",
        },
        {
          option: "Extrovert",
        },
      ],
    };
  },
});
</script>
<style>
.layout {
  color: white;
  position: absolute;
  justify-content: space-evenly;
}
.question {
  font-weight: 500;
  font-size: xx-large;
  text-align: center;
  word-spacing: 0.5rem;
  letter-spacing: 0.2rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  max-width: 60ch;
  overflow-wrap: break-word;
  margin-inline: auto;
  border-radius: 2rem;
  padding-inline: 1rem;
  border-radius: 50px !important;
}
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
@media screen and (min-width: 600px) {
  .option-tall {
    grid-row: span 2 / auto;
  }
  .option-wide {
    grid-column: span 1 / auto;
  }
}
</style>
