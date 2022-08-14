<template>
  <layout :background-image="require('../assets/second_bg.png')">
    <i-layout>
      <p class="d3 _margin-x:auto _text-align:center">AIESEC QUIZZIC</p>
      <p
        class="_font-style:monospace _margin-x:auto _text-align:center _white-space:normal _font-size:lg"
      >
        Welcome to AIESEC Quizzic, your music is playing
      </p>
      <div class="info-cards">
        <div
          class="glassmorphism info-card"
          v-for="(cardInfo, index) in cardInfos"
          :key="index"
        >
          <p class="lead">
            {{ cardInfo.message }}
          </p>
          <a
            class="_font-style:monospace _font-size:small"
            href="https://inkline.io"
          >
            Example Link
          </a>
        </div>
      </div>
      <i-button
        class="glassmorphism start-btn"
        @click="() => $router.push('./4/question')"
        >Start</i-button
      >
    </i-layout>
  </layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      cardInfos: [
        {
          message: "Answer ten questions to finish the quiz",
        },
        {
          message: "Receive the result and know more about yourself ",
        },
        {
          message: "Find your suitable program based on your answers",
        },
      ],
    };
  },
});
</script>
<style>
.layout {
  position: absolute;
}
.info-cards {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}
.info-card {
  text-align: center;
  backdrop-filter: blur(50px);
  width: 12ch;
  font-size: x-large;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.start-btn {
  width: 20%;
  margin-inline: auto;
  margin-top: 2em;
}
</style>
