<template>
  <div>
    <textarea
      v-model="inputText"
      class="border-2 border-purple-200 rounded-xl"
      placeholder="文字入力"
      rows="10"
      cols="40"
    ></textarea>

    <div class="border-2 border-purple-200 rounded-xl">
      {{ outputText }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      inputText: '',
    }
  },

  computed: {
    outputText(): string {
      return this.inputText
    },
  },
})
</script>
