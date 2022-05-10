const { call } = require("./utils/TransformationFunctions");
const { title } = require("./utils/StringManipulation");

const bands = [
  { name: "sunset sandstorm", country: "UK", active: false },
  { name: "women", country: "Germany", active: false },
  { name: "a silver mt. zion", country: "Spain", active: true }
];

const setCanadaAsCountry = call(() => "Canada", "country");
const stripPunctuationFromName = call(name => name.replace(".", ""), "name");
const capitalizeNames = call(name => title(name), "name");

function pipelineEach(bands, fns) {
  return fns.reduce((a, fn) => a.map(fn), bands);
}

console.log(pipelineEach(bands, [setCanadaAsCountry, stripPunctuationFromName, capitalizeNames]));