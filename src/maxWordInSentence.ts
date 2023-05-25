export function mostWordsFound(sentences: string[]): number {
    let maxWords = 0;
    for (const sentence of sentences) {
      const words = sentence.split(' ');
      const wordCount = words.length;
      if (wordCount > maxWords) {
        maxWords = wordCount;
      }
    }
    return maxWords;
  }

  const sentences = [
    "Alok is api deeloper",
    "he lives in Greater Noida",
    "Alok"
  ];
  const maxWordCount = mostWordsFound(sentences);
  console.log(maxWordCount);
  