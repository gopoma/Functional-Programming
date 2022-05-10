const count = function(sentences, word) {
  return sentences.reduce(function(a, sentence) {
    sentence = sentence.replace(/\s+/g, " ");
    const words = sentence.split(" ");
    return a + words.filter(w => w.match(word)).length;
  }, 0);
}

const sentences = ['Mary read a story to Isla and Sam.',
                    'Isla cuddled *Sam.',
                    '*Sam chortled.',
                    '*Sam was programming in C++.'];
const sam_count = count(sentences, "Sam");
console.log(sam_count); // 4