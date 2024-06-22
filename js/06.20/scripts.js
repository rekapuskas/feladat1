//1. feladat
/*Készíts egy programot, amely online rendeléseket kezel. 
Minden rendelés tartalmazza a megrendelő nevét, címét, a megrendelt termékek nevét, a rendelés állapotát és hogy hányszor módosult a rendelés. 
A programnak lehetősége van új rendelés hozzáadására, rendelés állapotának frissítésére és az összes rendelés megjelenítésére. 
Készíts egy függvényt, amivel terméknév alapján meg lehet keresni, hogy melyik vásárlók rendelték meg az adott terméket! */

let orders = [];
function addOrder(name, adress, productName, status, modification) {
  orders.push({ name, adress, productName, status, modification });
}
addOrder(
  "Márton Aladár",
  "Fő utca 2",
  ["babaolaj", "kávé"],
  "szállítás alatt",
  2
);
addOrder(
  "Puskás Aladár",
  "Fő utca 3",
  ["babaolaj", "süti"],
  "összekészítve",
  0
);
addOrder(
  "Sziklai Aladár",
  "Fő utca 4",
  ["ahja", "hal", "jaa"],
  "kiszállítva",
  1
);
console.log(orders);

function createOrders(name, adress, productName) {
  orders.push({
    name,
    adress,
    productName,
    status: "created",
    modification: 0,
  });
}
createOrders("Nagy Ferenc", "Fő utca 11", ["hal", "fű"]);

function findCostumerByProduct(productName) {
  let result = [];
  for (let i = 0; i < orders.length; ++i) {
    for (let j = 0; j < orders[i].productName.length; ++j)
      if (orders[i].productName[j] == productName) {
        result.push(orders[i]);
      }
  }
  console.log(result);
}

findCostumerByProduct("babaolaj");

//2. feladat
/* Készíts egy függvényt, ami egy stringet kap meg paraméterként, és visszaadja az első olyan karakterét a megadott szövegnek, ami nem ismétlődik a szövegben!*/

function firstNonRepeating(str) {
  let nonRepeating = true;
  for (let i = 0; i < str.length; ++i) {
    for (let j = 0; j < str.length; ++j) {
      if (str[i] == str[j] && i != j) {
        nonRepeating = false;
        break;
      }
    }
    if(nonRepeating){
        return str[i];
    }
  }
}
console.log(firstNonRepeating("alma"));
