let szam = 55; //global
/**
 * Ez függvény kiírja hogy mau
 * @returns {void}
 */
Valami1(); //holstring
function Valami1()
{
    console.log("mau");
}
Valami1();

/**
 * Ez függvény kiírja hogy a szam-ot
 * @returns {void}
 */
function Valami2()
{
    console.log(szam);
}
Valami2();

/**
 * Deklarálunk egy változót
 * @returns {void}
 */
function Valami3()
{
    const alszam = 41;
    console.log(alszam);
}
Valami3();

/**
 * Deklarálunk egy változót és hozzáadunk egy másik számot
 * @param {number} para
 * @returns {number}
 */
function Valami4(para)
{
    const szam2 = 22;
    const szam3 = szam2 + para;
    return szam3
}
const kiir = Valami4(82);
console.log(kiir);