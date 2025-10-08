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
const tr = document.createElement("tr");
const th1 = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");
 
document.body.appendChild(thead);
table.appendChild(thead);
thead.appendChild(tr);
tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
 
th1.innerText = "Fizikai területe";
th2.innerText = "Időszak";
th3.innerText = "Képviselők";
th3.colSpan = 2;
 
const tbody = document.createElement("tbody");
table.appendChild(tbody)
 
for(let i = 0; i < arr.length; i++)
    {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
 
    td1.innerText = arr[i].theme;
    td2.innerText = arr[i].time;
    td3.innerText = arr[i].scientist1;
 
    if (arr[i].scientist2 === undefined) {
        td3.colSpan = 2;
    } else {
        const td4 = document.createElement("td");
        td4.innerText = arr[i].scientist2;
        tr.appendChild(td4);
    }
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);
};