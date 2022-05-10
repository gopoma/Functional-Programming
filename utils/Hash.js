const hash = function(name) {
  return name.split("").reduce((a, b) => a + b.charCodeAt(0), "");
}

module.exports = { hash };