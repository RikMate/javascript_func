console.log("mau");
/**
 * @type {string}
 */
const string = "povmát";
console.log(string);

const b = ["a", "b", "c"];
for (let i = 0; i < b.length; i++)
{
    console.log(b[i]);
}

for (const idk of b) {
    console.log(idk)
}

for (const key in b) {
    console.log(b[key])
}

for (const key in b) {
    console.log(`${b[key]}`)
}

const y = {
    /**
     * @type {{name : string, age : number}}
    */
    name : "Povmát",
    age : 24
}

for (const key in y) {
    console.log(y[key])
}
