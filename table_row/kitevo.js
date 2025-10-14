/**
 * @type {{nemzetiseg : string, szerzo1 : string, mu1 : string, szerzo2 : string, mu2 : string}[]}
 */
const arr = [
    {
        nemzetiseg: 'Orosz',
        szerzo1: 'Gogol',
        mu1: 'A köpönyeg',
        szerzo2: 'Csehov',
        mu2: 'A csinovnyik halála'
    },
    {
        nemzetiseg: 'Cseh',
        szerzo1: 'Franz Kafka',
        mu1: 'Az átváltozás'
    },
    {
        nemzetiseg: 'Magyar',
        szerzo1: 'Örkény István',
        mu1: 'Egyperces Novellák',
        szerzo2: 'József Attila',
        mu2: 'Klárisok'
    },
    {
        nemzetiseg: 'Svájc',
        szerzo1: 'Friedrich Dürrenmatt',
        mu1: 'A fizikusok'
    }
]
 
const table = document.createElement("table");
const thead = document.createElement("thead");
const tr = document.createElement("tr");

document.body.appendChild(table);
table.appendChild(thead);
thead.appendChild(tr);
 
const thk = ["Nemzetiség", "Szerző", "Mű"];
for(const item of thk){
    const th = document.createElement("th");
    tr.appendChild(th);
    th.innerText = item;
}
 
const tbody = document.createElement("tbody");
table.appendChild(tbody)
 
for(const obj of arr)
    {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
 
    td1.innerText = obj.nemzetiseg;
    td2.innerText = obj.szerzo1;
    td3.innerText = obj.mu1;
 
    tbody.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    if(obj.szerzo2)
    {
        td1.rowSpan = 2;

        const tr = document.createElement("tr");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");

        td4.innerText = obj.szerzo2;
        td5.innerText = obj.mu2;

         tbody.appendChild(tr);
         tr.appendChild(td4);
         tr.appendChild(td5);
    }
};