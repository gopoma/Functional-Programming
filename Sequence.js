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
function ruleSequence2(s, rules) {
  for(let rule of rules) {
    s = rule(s);
    if(!s) {
      break;
    }
  }

  return s;
}
function ruleSequence(s, rules) {
  if(!s || rules.length === 0) {
    return s;
  }
  return ruleSequence(rules[0](s), rules.slice(1, rules.length));
}

console.log(ruleSequence("0101", [zero, one, zero]));
console.log(ruleSequence("0101", [zero, zero, one, one]));

console.log(ruleSequence2("0101", [zero, one, zero]));
console.log(ruleSequence2("0101", [zero, zero, one, one]));