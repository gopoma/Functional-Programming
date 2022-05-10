const { count } = require("./utils/StringManipulation");

const sentences = ['Mary read a story to Isla and          Sam.',
                    'Isla           cuddled *Sam.',
                    '*Sam chortled.',
                    '*Sam was programming in C++.',
                    '#*Sam#* used to love WSL.'];
const samCount = sentences.reduce((a, sentence) => a + count(sentence, "Sam"), 0);
console.log(samCount); // 5