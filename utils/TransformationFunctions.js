const { title } = require("./StringManipulation");

function assoc(_d, key, value) {
  const d = {..._d};
  d[key] = value;
  return d;
}

function setCanadaAsCountry(band) {
  return assoc(band, "country", "Canada");
}
function stripPunctuationFromName(band) {
  return assoc(band, "name", band["name"].replace(".", ""));
}
function capitalizeNames(band) {
  return assoc(band, "name", title(band["name"]));
}
function call(fn, field) {
  return function(record) {
    return assoc(record, field, fn(record[field]));
  }
}

module.exports = {
  setCanadaAsCountry,
  stripPunctuationFromName,
  capitalizeNames,
  call
};