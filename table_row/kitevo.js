const a = {};
const szam = 20;
if (szam > 5)
{
    a.name = "Psylocke <3";
}
else
{
    a["name"] = "Invis <3";
}
console.log(a.name);
console.log(a["name"]);
console.log(a.age);