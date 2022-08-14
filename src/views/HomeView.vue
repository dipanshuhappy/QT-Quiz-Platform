<template>
  <i-layout
    :style="{
      'background-size': 'cover',
      'background-image': 'url(' + require('../assets/home_bg.png') + ')',
    }"
  >
    <i-layout-header>
      <p class="lead _font-family:monospace _float:right _margin:1">Home</p>
    </i-layout-header>

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
          <i-button class="glassmorphism">Take Quiz</i-button>
          <i-button class="glassmorphism">Make Quiz</i-button>
        </div>
      </i-layout-aside>
    </i-layout>
    <i-layout-footer> Footer </i-layout-footer>
  </i-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeView",
});
</script>
<style>
.layout {
  width: 100%;
  min-height: 100%;
}
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
