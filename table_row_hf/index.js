/**
 * @type {{war : string, team1 : string, team1Size : string, team2 : string, team2Size : string}[]}
 */
const arr = [
    {
        war: 'Rákóczi szabadságharc',
        team1: 'Kuruc',
        team1Size: '70.000',
        team2: 'Labanc',
        team2Size: '60.000',
    },
    {
        war: '48-as szabadságharc',
        team1: 'Osztrák császárság (+ Orosz birodalom)',
        team1Size: '170.000 (+ 200.000)',
        team2: 'Magyar királyság',
        team2Size: '170.000',
    },
    {
        war: 'I. világháború',
        team1: 'Antant',
        team1Size: '43 millió',
        team2: 'Központi hatalmak',
        team2Size: '25 millió',
    },
    {
        war: 'Bosworthi csata',
        team1: 'Angolok (York + Lancester)',
        team1Size: '15.000',
    }
]

const table = document.createElement("table");
document.body.appendChild(table);

const thead = document.createElement("thead");
const tr = document.createElement("tr");
const thk = ["Harc megnevezése", "Szembenálló felek", "Haderő"];

table.appendChild(thead);
thead.appendChild(tr);

for(let i = 0; i < thk.length; i++)
{
    const th = document.createElement("th");
    tr.appendChild(th);
    th.innerText = thk[i];
}

const tbody = document.createElement("tbody");
table.appendChild(tbody);

for(let i = 0; i < arr.length; i++)
{
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    td1.innerText = arr[i].war;
    td2.innerText = arr[i].team1;
    td3.innerText = arr[i].team1Size;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    if(arr[i].team2 !== undefined)
    {
        td1.rowSpan = "2";
        const tr = document.createElement("tr");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");

        td4.innerText = arr[i].team2;
        td5.innerText = arr[i].team2Size;

        tbody.appendChild(tr);
        tr.appendChild(td4);
        tr.appendChild(td5);
    }
}