/**
 * @type {CountryWriters}
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
const tbody = document.createElement("tbody");

document.body.appendChild(table);
table.appendChild(tbody)

tbody.id = "tbody";
 
const thk = ["Nemzetiség", "Szerző", "Mű"];
renderTableBody(arr);
generateHeader(table, thk);

/**
 * @type {HTMLFormElement}
 **/
const forms = document.getElementById("htmlform");
forms.addEventListener("submit", htmlEventListener);

const jsform = document.createElement("form");
const button = document.createElement("button");

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
    * @type {CountryWriters}
    */
   const obj = {};
   obj.nemzetiseg = ubiVagyDinnyeValue;
   obj.szerzo1 = dinnyeVagyUbiValue;
   obj.mu1 = zoldVagySargaValue;
   obj.szerzo2 = kerekVagyRudValue;
   obj.mu2 = idkatpValue;

   arr.push(obj);
   renderTableBody(arr);
})
button.innerText = "Hozzáadás";
jsform.append(button);