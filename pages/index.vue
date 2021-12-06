<template>
  <div>
    <div v-if="loading">読み込み中</div>
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
    <div>
      {{ result }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getTokenizer } from '@/lib/utils'

export default Vue.extend({
  data() {
    return {
      loading: false,
      inputText: '',
      tokenizer: null as any,
      result: null as any,
    }
  },

  created() {
    const loadTokenizer = async () => {
      this.loading = true
      this.tokenizer = await getTokenizer()
      console.log(this.tokenizer)
      console.log(this.tokenizer.tokenize('これはテストです。'))

      this.loading = false
    }
    loadTokenizer()
  },

  computed: {
    outputText(): string {
      if (this.tokenizer === null) {
        return this.inputText
      }
      const result = this.tokenizer.tokenize(this.inputText)
      console.log(result)
      this.result = result
      return this.inputText
    },
  },
})
</script>
