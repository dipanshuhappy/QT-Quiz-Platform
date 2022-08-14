<template>
  <layout :background-image="backgroundImage">
    <i-layout vertical>
      <i-layout-content class="_margin-left:2">
        <div class="d3">AIESEC QUIZZIC</div>
        <p
          class="lead _font-family:monospace _white-space:normal _font-size:lg"
        >
          Welcome to AIESEC Quizzic, this is the website designed for people who
          <br />
          want to find their suitable programs in AIESEC. While doing the quiz,
          <br />
          you can listen to the music to relax. Have fun! <br />
        </p>
      </i-layout-content>
      <i-layout-aside class="_flex:fill">
        <div class="quiz-button">
          <i-button
            class="glassmorphism"
            @click="isEnterQuizIdModalVisible = true"
            >Take Quiz</i-button
          >
          <enter-quiz-id-modal v-model:show-modal="isEnterQuizIdModalVisible" />
          <i-button class="glassmorphism">Make Quiz</i-button>
        </div>
      </i-layout-aside>
    </i-layout>
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EnterQuizIdModal from "@/components/EnterQuizIdModal.vue";
export default defineComponent({
  name: "HomeView",
  components: { EnterQuizIdModal },
  data() {
    return {
      isEnterQuizIdModalVisible: false,
      backgroundImage: require("../assets/home_bg.png"),
    };
  },
});
</script>
<style>
.layout-aside {
  flex: 1;
}
.layout-content {
  max-width: 50%;
  margin-top: auto;
  margin-bottom: auto;
}
.quiz-button {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  gap: 2rem;
  width: 50%;
  margin-inline: auto;
}
</style>
