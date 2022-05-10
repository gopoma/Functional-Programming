const { hash } = require("./utils/Hash");

const names = ["Maria", "Arturo", "Sam"];
const secretNames = names.map(name => hash(name));
console.log(secretNames); // ['779711410597', '65114116117114111', '8397109']
console.log(names); // ['Maria', 'Arturo', 'Sam']