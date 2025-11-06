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

createCell("th", "Szerzők", tr);
createCell("th", "Korszak", tr);
const idk1 = createCell("th", "Szerelmek", tr)
idk1.colSpan = 2;
 
const tbody = document.createElement("tbody");
table.appendChild(tbody);
 
for(let i = 0; i < arr.length; i++)
    {
    const tr = document.createElement("tr");
    createCell("td", arr[i].szerzoNeve, tr)
    createCell("td", arr[i].korszak, tr)
    const idk2 = createCell("td", arr[i].szerelmek1, tr)
 
    if (arr[i].szerelmek2 === undefined) {
        idk2.colSpan = 2;
    } else {
        createCell("td", arr[i].szerelmek2, tr)
    }
    tbody.appendChild(tr);
};

/**
 * @param {string} celltype th/td
 * @param {string} cellContent tartalom
 * @param {HTMLTableRowElement} parentRow tr
 * 
 * @returns {HTMLTableCellElement}
 */
function createCell(celltype, cellContent, parentRow)
{
    const cell = document.createElement(celltype);
    cell.innerText = cellContent;
    parentRow.appendChild(cell);
    return cell;
}


/**
 *
 * @param {HTMLFormElement} form
 * @param {string} id
 * @param {string} labelText
 */
function createField(form, id, labelText) {
    const label = document.createElement("label");
    label.htmlFor = id;
    label.innerText = labelText;
    form.appendChild(label);
    form.appendChild(document.createElement("br"));
 
    const input = document.createElement("input");
    input.type = "text";
    input.id = id;
    input.name = id;
    form.appendChild(input);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
}
 
const form = document.createElement("form");
form.id = "form_js";
 
const h2 = document.createElement("h2");
h2.innerText = "Javascript form";
form.appendChild(h2);
 
createField(form, "kolto_nev", "Költő neve:");
createField(form, "korszak", "Korszak:");
createField(form, "szerelem1", "Szerelme:");
createField(form, "szerelem2", "Szerelme:");
 
const button = document.createElement("button");
button.innerText = "Hozzáadás";
form.appendChild(button);
 
document.body.appendChild(form);