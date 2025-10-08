//console.log("mau");
/**
 * @type {string}
 */
/*const string = "povmát";
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
    /*name : "Povmát",
    age : 24
//}
/*
for (const key in y) {
    console.log(y[key])
}
*/

//HÁZI FELADAT:
/**
 * @type {{szerzoNeve : string, korszak : string, szerelmek1 : string, szerelmek2 : string}[]}
 */
const arr = [
    {
        szerzoNeve: 'Balassi Bálint',
        korszak: 'reformáció',
        szerelmek1: 'Losonczy Anna',
        szerelmek2: 'Dobó Krisztina'
    },
    {
        szerzoNeve: 'Csokonai Vitéz Mihály',
        korszak: 'felvilágosodás',
        szerelmek1: 'Vajda Juliána'
    },
    {
        szerzoNeve: 'Petőfi Sándor',
        korszak: 'magyar romantika',
        szerelmek1: 'Mednyánszky Berta',
        szerelmek2: 'Szendrey Júlia'
    },
    {
        szerzoNeve: 'Ady Endre',
        korszak: '20. század',
        szerelmek1: 'Léda',
        szerelmek2: 'Csinszka'
    }
]
 
const table = document.createElement("table");
const thead = document.createElement("thead");
const tr = document.createElement("tr");

 document.body.appendChild(table);
document.body.appendChild(thead);
table.appendChild(thead);
thead.appendChild(tr);

const th1 = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");
tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);

th1.innerText = "Szerző neve";
th2.innerText = "Korszak";
th3.innerText = "Szerelmek";
th3.colSpan = 2;
 
const tbody = document.createElement("tbody");
table.appendChild(tbody);
 
for(let i = 0; i < arr.length; i++)
    {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
 
    td1.innerText = arr[i].szerzoNeve;
    td2.innerText = arr[i].korszak;
    td3.innerText = arr[i].szerelmek1;
 
    if (arr[i].szerelmek2 === undefined) {
        td3.colSpan = 2;
    } else {
        const td4 = document.createElement("td");
        td4.innerText = arr[i].szerelmek2;
        tr.appendChild(td4);
    }
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);
};