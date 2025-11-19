/**
 * @typedef {{id: string, label: string}} FormField
 */
const mainObj = {
    /**
     * @type {string[]}
     */
    headerTomb : ["Nemzetiség", "Szerző", "Mű"],
    /**
     * @type {FormField[]} 
     */
    idLabelTomb : 
    [
        {id : "nemzetiseg", label : "Nemzetiség"},
        {id : "szerzo1", label : "Szerző"},
        {id : "mu1", label : "Mű"},
        {id : "szerzo2", label : "Másik Szerző"},
        {id : "mu2", label : "Mű"}
    ]

}


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
 
generateTable(mainObj.headerTomb, "tbody");
renderTableBody(arr);
 
/**
 * @type {HTMLFormElement}
 **/
const forms = document.getElementById("htmlform");
forms.addEventListener("submit", htmlEventListener);
 
const jsform = renderForm("js_form", mainObj.idLabelTomb);
 
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
    * @type {HTMLInputElement}
    **/
    const dinnyeVagyUbi = pepino.querySelector("#szerzo1");
 
    /**
    * @type {HTMLInputElement}
    **/
    const zoldVagySarga = pepino.querySelector("#mu1");
 
    /**
    * @type {HTMLInputElement}
    **/
    const kerekVagyRud = pepino.querySelector("#szerzo2");
 
    /**
    * @type {HTMLInputElement}
    **/
    const idkatp = pepino.querySelector("#mu2");
 
    if(validateFields(ubiVagyDinnye, dinnyeVagyUbi, zoldVagySarga))
    {
        /**
        * @type {string}
        **/
        const ubiVagyDinnyeValue = ubiVagyDinnye.value;
 
        /**
        * @type {string}
        **/
        const dinnyeVagyUbiValue = dinnyeVagyUbi.value;
 
        /**
        * @type {string}
        **/
        const zoldVagySargaValue = zoldVagySarga.value;
 
        /**
        * @type {string}
        **/
        const kerekVagyRudValue = kerekVagyRud.value;
 
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
        obj.szerzo2 = kerekVagyRudValue !== "" ? kerekVagyRudValue : undefined;
        obj.mu2 = idkatpValue !== "" ? idkatpValue : undefined;
 
        arr.push(obj);
        renderTableBody(arr);
 
        jsform.reset();
    }
 
   for(const item of arr)
   {
    console.log(item.nemzetiseg, item.szerzo1, item.mu1, item.szerzo2, item.mu2)
   }
})