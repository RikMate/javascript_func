/**
 * @typedef {{nemzetiseg : string, szerzo1 : string, mu1 : string, szerzo2? : string, mu2? : string}}
 */

/**
 * @param {HTMLFormElement} form
 * @param {string} id
 * @param {string} labelText
 */
function createFormElement(form, id, labelText)
{
    const label = document.createElement("label");
    const input = document.createElement("input");
    const div = document.createElement("div");
    const span = document.createElement("span")

    label.htmlFor = id;
    label.innerText = labelText;
    input.id = id;

    div.appendChild(document.createElement("br"));
    div.appendChild(label);
    div.appendChild(document.createElement("br"));
    div.appendChild(input);
    div.appendChild(document.createElement("br"));
    form.appendChild(div);

    span.classList.add("error");
    div.appendChild(span);
}

/**
 * @param {HTMLTableSectionElement} tableBody
 * @param {CountryWriters} writerRow
 */
function renderTableRow(tableBody, writerRow)
{
        const tr = document.createElement("tr");
        const td1 = createTableCell("td", writerRow.nemzetiseg, tr);
        const td2 = createTableCell("td", writerRow.szerzo1, tr);
        const td3 = createTableCell("td", writerRow.mu1, tr);

        tableBody.appendChild(tr);

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

        if(writerRow.szerzo2)
        {
            td1.rowSpan = 2;

            const tr = document.createElement("tr");
            const td4 = createTableCell("td", writerRow.szerzo2, tr);
            const td5 = createTableCell("td", writerRow.mu2, tr);

            tableBody.appendChild(tr);
        }
}

/**
 * @param {CountryWriters[]}
 */
function renderTableBody(array)
{
    const tbodyValtozo = document.getElementById("tbody");
    tbody.innerHTML = "";

    for(const obj of arr)
    {
        renderTableRow(tbodyValtozo, obj)
    }
}

/**
 * @param {"th", | "td"} celltype
 * @param {string} cellContent
 * @param {HTMLTableRowElement} parentRow
 * @returns {HTMLTableCellElement}
 */
function createTableCell(celltype, cellContent, parentRow)
{
    const cell = document.createElement(celltype);
    cell.innerText = cellContent;
    parentRow.appendChild(cell)
    return cell
} 

/**
 * @param {HTMLElement} table 
 * @param {string[]} thk
 */
function generateHeader(table, thk)
{
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    table.appendChild(thead)
    thead.appendChild(tr);
    for(const item of thk)
    {
        createTableCell("th", item, tr);
    }
}

/**
 * @param {Event} e
 */
function htmlEventListener(e)
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
    * @type {CountryWriters}
    */
   const obj = {};
   obj.nemzetiseg = ubiVagyDinnyeValue;
   obj.szerzo1 = dinnyeVagyUbiValue;
   obj.mu1 = zoldVagySargaValue;
   obj.szerzo2 = kerekVagyRudValue;
   obj.mu2 = idkatpValue;

   const vlm = document.getElementById("pepino");
   renderTableRow(vlm, obj);
}