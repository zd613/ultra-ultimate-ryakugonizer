<template>
  <div class="home"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import kuromoji from "kuromoji";

export default defineComponent({
  name: "HomeView",
  components: {},
  created() {
    kuromoji.builder({ dicPath: "/dict/" }).build(function (err, tokenizer) {
      // tokenizer is ready
      const path = tokenizer.tokenize("すもももももももものうち");
      console.log(path);
    });
  },
});
</script>
