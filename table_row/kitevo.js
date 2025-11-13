/**
 * @type {{nemzetiseg : string, szerzo1 : string, mu1 : string, szerzo2? : string, mu2? : string}[]}
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
const tbody = document.createElement("tbody");

document.body.appendChild(table);
table.appendChild(tbody)
table.appendChild(thead);
thead.appendChild(tr);

tbody.id = "tbody";
 
const thk = ["Nemzetiség", "Szerző", "Mű"];
for(const item of thk){
    const th = document.createElement("th");
    tr.appendChild(th);
    th.innerText = item;
}
/**
 * @param {{nemzetiseg : string, szerzo1 : string, mu1 : string, szerzo2? : string, mu2? : string}[]}
 */
function renderTableBody(array)
{
    const tbodyValtozo = document.getElementById("tbody");
    tbody.innerHTML = "";

    for(const obj of arr)
        {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");

        tbodyValtozo.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        td1.innerText = obj.nemzetiseg;

        /**
         * @type {HTMLTableCellElement}
         */
        td1.addEventListener("click", function (e)
        {
            const target = e.target;
            const parentRow = target.parentElement;
            const tbodyOrigin = parentRow.parentElement;
            const markedCell = tbodyOrigin.querySelector(".marked");

            if (markedCell !== null) {
                markedCell.classList.remove("marked");
            }
            target.classList.add("marked");
        }
    )
        td2.innerText = obj.szerzo1;
        td3.innerText = obj.mu1;

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
    }
}
renderTableBody(arr);

/**
 * @type {HTMLFormElement}
 **/
const forms = document.getElementById("htmlform");
forms.addEventListener("submit", function (e)
{
    e.preventDefault();

    /**
     * @type {HTMLFormElement}
     */
    const pepino = e.target;

    /**
    * @type {HTMLInputElement}
    **/
    const ubiVagyDinnye = pepino.querySelector("#nemzetiseg");
    /**
    * @type {string}
    **/
    const ubiVagyDinnyeValue = ubiVagyDinnye.value;

    /**
    * @type {HTMLInputElement}
    **/
    const dinnyeVagyUbi = pepino.querySelector("#szerzo1");
    /**
    * @type {string}
    **/
   const dinnyeVagyUbiValue = dinnyeVagyUbi.value;

    /**
    * @type {HTMLInputElement}
    **/
    const zoldVagySarga = pepino.querySelector("#mu1");
    /**
    * @type {string}
    **/
   const zoldVagySargaValue = zoldVagySarga.value;

    /**
    * @type {HTMLInputElement}
    **/
    const kerekVagyRud = pepino.querySelector("#szerzo2");
    /**
    * @type {string}
    **/
   const kerekVagyRudValue = kerekVagyRud.value;

    /**
    * @type {HTMLInputElement}
    **/
    const idkatp = pepino.querySelector("#mu2");
    /**
    * @type {string}
    **/
   const idkatpValue = idkatp.value;

   /**
    * @type {{nemzetiseg : string, szerzo1 : string, mu1 : string, szerzo2 : string, mu2 : string}}
    */
   const obj = {};
   obj.nemzetiseg = ubiVagyDinnyeValue;
   obj.szerzo1 = dinnyeVagyUbiValue;
   obj.mu1 = zoldVagySargaValue;
   obj.szerzo2 = kerekVagyRudValue;
   obj.mu2 = idkatpValue;

   const vlm = document.getElementById("pepino");

   const tr = document.createElement("tr");
   vlm.appendChild(tr)
   const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
 
    td1.innerText = obj.nemzetiseg;
    /**
     * @type {HTMLTableCellElement}
     */
    td1.addEventListener("click", function (e)
    {
        const target = e.target;
        target.classList.add("marked");
    }
)
    td2.innerText = obj.szerzo1;
    td3.innerText = obj.mu1;
 
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

         vlm.appendChild(tr);
         tr.appendChild(td4);
         tr.appendChild(td5);
    }
})

/**
 * @param {HTMLFormElement}
 * @param {string}
 * @param {string}
 */
function createFormElement(form, id, labelText)
{
    const label = document.createElement("label");
    const input = document.createElement("input");

    label.htmlFor = id;
    label.innerText = labelText;
    input.id = id;
    form.appendChild(document.createElement("br"));

    form.appendChild(label);
    form.appendChild(document.createElement("br"));
    form.appendChild(input);
    form.appendChild(document.createElement("br"));
}
const jsform = document.createElement("htmlform");
const button = document.createElement("button")    

jsform.id = "form_js";

createFormElement(jsform, "nemzetiseg", "Nemzetiség:");
createFormElement(jsform, "szerzo1", "Szerző neve:");
createFormElement(jsform, "mu1", "Mű:");
createFormElement(jsform, "szerzo2", "Másik szerző neve:");
createFormElement(jsform, "mu2", "Mű:");

document.body.appendChild(jsform);

/**
 * @type {HTMLFormElement}
 **/
jsform.addEventListener("submit", function (e)
{
    e.preventDefault();

    /**
     * @type {HTMLFormElement}
     */
    const pepino = e.target;

    /**
    * @type {HTMLInputElement}
    **/
    const ubiVagyDinnye = pepino.querySelector("#nemzetiseg");
    /**
    * @type {string}
    **/
    const ubiVagyDinnyeValue = ubiVagyDinnye.value;

    /**
    * @type {HTMLInputElement}
    **/
    const dinnyeVagyUbi = pepino.querySelector("#szerzo1");
    /**
    * @type {string}
    **/
   const dinnyeVagyUbiValue = dinnyeVagyUbi.value;

    /**
    * @type {HTMLInputElement}
    **/
    const zoldVagySarga = pepino.querySelector("#mu1");
    /**
    * @type {string}
    **/
   const zoldVagySargaValue = zoldVagySarga.value;

    /**
    * @type {HTMLInputElement}
    **/
    const kerekVagyRud = pepino.querySelector("#szerzo2");
    /**
    * @type {string}
    **/
   const kerekVagyRudValue = kerekVagyRud.value;

    /**
    * @type {HTMLInputElement}
    **/
    const idkatp = pepino.querySelector("#mu2");
    /**
    * @type {string}
    **/
   const idkatpValue = idkatp.value;

   /**
    * @type {{nemzetiseg : string, szerzo1 : string, mu1 : string, szerzo2 : string, mu2 : string}}
    */
   const obj = {};
   obj.nemzetiseg = ubiVagyDinnyeValue;
   obj.szerzo1 = dinnyeVagyUbiValue;
   obj.mu1 = zoldVagySargaValue;
   obj.szerzo2 = kerekVagyRudValue;
   obj.mu2 = idkatpValue;

   arr.push(obj);
   renderTableBody(arr)
})
button.innerText = "Hozzáadás";
jsform.append(button);