function zero(s) {
  if(s[0] === "0") {
    return s.substring(1, s.length);
  }
}
function one(s) {
  if(s[0] === "1") {
    return s.substring(1, s.length);
  }
}
function ruleSequence(s, rules) {
  if(s === undefined || rules.length === 0) {
    return s;
  } else {
    return ruleSequence(rules[0](s), rules.slice(1, rules.length));
  }
}
function ruleSequence2(s, rules) {
  for(let rule of rules) {
    s = rule(s);
    if(s === undefined) {
      break;
    }
  }
  return s;
}

console.log(ruleSequence("0101", [zero, one, zero])); // 1
console.log(ruleSequence("0101", [zero, zero])); // undefined