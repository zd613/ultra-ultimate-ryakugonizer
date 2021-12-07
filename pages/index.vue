<template>
  <div class="bg-purple-100 min-h-screen flex justify-center">
    <div>
      <div v-if="loading">読み込み中</div>

      <div>
        <div>文字入力欄</div>
        <textarea
          v-model="inputText"
          class="border-2 border-purple-200 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="文字入力"
          rows="10"
          cols="40"
        ></textarea>
      </div>
      <div class="flex justify-center mt-2">
        <button
          class="p-2 bg-purple-500 rounded-xl text-white text-xl"
          @click="ryakugonize"
        >
          変換
        </button>
      </div>
      <div class="flex justify-center mt-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-purple-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="mt-8">
        <div class="border-2 border-purple-200 rounded-xl bg-white p-2 h-32">
          {{ result }}
        </div>
      </div>
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

  methods: {
    ryakugonize() {
      if (this.tokenizer === null) {
        return this.inputText
      }
      const result = this.tokenizer.tokenize(this.inputText)
      console.log(result)
      this.result = result
    },
  },
})
</script>
