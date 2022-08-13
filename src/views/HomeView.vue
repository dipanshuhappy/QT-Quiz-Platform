<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <it-button>sldjflsdf</it-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Button } from "equal-vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
    Button,
  },
});
</script>
