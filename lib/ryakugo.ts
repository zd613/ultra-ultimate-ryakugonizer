import kuromoji from 'kuromoji'

export class Ryakugonizer {
  private tokenizer

  constructor(tokenizer: kuromoji.Tokenizer<kuromoji.IpadicFeatures>) {
    this.tokenizer = tokenizer
  }

  public ryakugonize(text: string) {
    const result = this.tokenizer.tokenize(text)
    // TODO: テキストを変換数
    const output = text
    return output
  }
}
