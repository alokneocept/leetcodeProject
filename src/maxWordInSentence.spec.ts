import { mostWordsFound } from "./maxWordInSentence";

describe('mostWordsFound', () => {
  test('for calculating maximum number of words', () => {
    const sentences1 = ['hello', '1 2 3'];
    expect(mostWordsFound(sentences1)).toEqual(4);
    const sentences2 = ['hello', '1 2 3'];
    expect(mostWordsFound(sentences2)).toEqual(3);
     const sentences3 = ['Alok'];
    expect(mostWordsFound(sentences3)).toEqual(1);
  });
  test('for empty array', () => {
    const sentences4: string[] = [];
    expect(mostWordsFound(sentences4)).toEqual(0);
  });
});
