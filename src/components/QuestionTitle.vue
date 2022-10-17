
<template>
<div class="question-and-option">
    <div class="glassmorphism question">{{title}}</div>
</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    props:{
        title:String
    }
})
</script>
<style>
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
</style>