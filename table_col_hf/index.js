/**
 * @type {{theme : string, time : string, scientist1 : string, scientist2 : string}[]}
 */
const arr = [
    {
        theme: 'Optika',
        time: 'XI. szazad',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX-XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
]

const table = document.createElement("table");
document.body.appendChild(table);

const thead = document.createElement("thead");
const tr1 = document.createElement("tr");
const th1 = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");

document.body.appendChild(thead);
table.appendChild(thead);
thead.appendChild(tr1);
tr1.appendChild(th1);
tr1.appendChild(th2);
tr1.appendChild(th3);

th1.innerText = "Fizikai területe";
th2.innerText = "Időszak";
th3.innerText = "Képviselők";

const tbody = document.createElement("tbody");
table.appendChild(tbody)
const tr2 = document.createElement("tr");
const td1 = document.createElement("td");
const td2 = document.createElement("td");
const td3 = document.createElement("td");