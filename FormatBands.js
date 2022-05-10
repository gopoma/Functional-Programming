const { title } = require("./utils/StringManipulation");

const bands = [
  { name: "sunset sandstorm", country: "UK", active: false },
  { name: "women", country: "Germany", active: false },
  { name: "a silver mt. zion", country: "Spain", active: true }
];

function formatBands(bands) {
  for(let band of bands) {
    band.country = "Canada";
    band.name = band.name.replace(".", "");
    band.name = title(band.name);
  }
}
formatBands(bands);