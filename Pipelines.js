function assoc(_d, key, value) {
  const d = {..._d};
  d[key] = value;
  return d;
}
// function setCanadaAsCountry(band) {
//   return assoc(band, "country", "Canada");
// }
// function stripPunctiationFromName(band) {
//   return assoc(band, "name", band["name"].replace(".", ""));
// }
// function capitalizeNames(band) {
//   return assoc(band, "name", band["name"].toUpperCase());
// }
const call = function(fn, key) {
  const applyFn = function(record) {
    return assoc(record, key, fn(record[key]));
  }
  return applyFn;
}

const setCanadaAsCountry = call(() => "Canada", "country");
const stripPunctiationFromName = call(name => name.replace(".", ""), "name");
const capitalizeNames = call(name => name.toUpperCase(), "name");
function extractNameAndCountry(band) {
  const pluckedBand = {};
  pluckedBand["name"] = band["name"];
  pluckedBand["country"] = band["country"];

  return pluckedBand;
}
const pluck = function(keys) {
  return function(record) {
    return keys.reduce((a, key) => assoc(a, key, record[key]), {});
  }
}

function pipelineEach(data, fns) {
  return fns.reduce((a, x) => a.map(x), data);
}

const bands = [
  {name: 'sunset rubdown', country: 'UK', active: false},
  {name: 'women', country: 'Germany', active: false},
  {name: 'a silver mt. zion', country: 'Spain', active: true}
];

const formattedBands = pipelineEach(bands, [setCanadaAsCountry, 
                                            stripPunctiationFromName, 
                                            capitalizeNames,
                                            pluck(["name", "country"]) // extractNameAndCountry
                                            ]);

console.log("Formatted Bands:", formattedBands);
console.log("Original Bands:", bands);