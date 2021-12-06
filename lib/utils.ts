import kuromoji from 'kuromoji'

export function getTokenizer(): Promise<
  kuromoji.Tokenizer<kuromoji.IpadicFeatures>
> {
  return new Promise((resolve) => {
    const dicPath = '/dict/'

    kuromoji.builder({ dicPath }).build(function (_, tokenizer) {
      // tokenizer is ready
      // const path = tokenizer.tokenize('すもももももももものうち')
      // console.log(path)

      resolve(tokenizer)
    })
  })
}
