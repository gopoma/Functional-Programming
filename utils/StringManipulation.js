function title(str) {
  return str.split(" ").map(s => s[0].toUpperCase() + s.substring(1, s.length)).join(" ");
}

function count(sentence, word) {
  sentence = sentence.replace(/\s+/g, " ");
  const words = sentence.split(" ");
  return words.filter(w => w.match(word)).length;
}

module.exports = { title, count };