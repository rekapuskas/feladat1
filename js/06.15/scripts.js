let house1 = {
  adress: "Váci út 22-24",
  owner: {
    firstName: "Kis",
    lastName: "Béla",
    money: 4,
  },
  formerOwner: [
    { firstName: "Puskás", lastName: "Levente" },
    { firstName: "Nagy", lastName: "Fanny" },
  ],
  price: 10,
  forSale: true,
};

let house2 = {
  adress: "Virág utca 5",
  owner: {
    firstName: "Mátrai",
    lastName: "Boglárka",
    money: 19,
  },
  formerOwner: [
    { firstName: "Mátrai", lastName: "Boglárka" },
    { firstName: "Molnár", lastName: "Zoltán" },
    { firstName: "Gábor", lastName: "Dénes" },
  ],
  price: 7,
  forSale: false,
};
let house3 = {
  adress: "Had utca 245/B",
  owner: {
    firstName: "Németh",
    lastName: "Elemér",
    money: 87,
  },
  formerOwner: [{ firstName: "Nagy", lastName: "Lajos" }],
  price: 15,
  forSale: true,
};
const neighborhood = [house1, house2, house3];

function getHouseByAdress(neighborhood, wantedAdress) {
  for (let i = 0; i < neighborhood.length; ++i) {
    if (neighborhood[i].adress == wantedAdress) {
      return neighborhood[i];
    }
  }
  return null;
}
let houseExample = getHouseByAdress(neighborhood, "Virág utca 5");
console.log(houseExample);

//3. rész
/* Csinálj egy függvényt, ami egy szomszédságot, egy ház címét és egy új tulajdonost kap meg paraméterként, és az új tulajdonost teszi meg jelenlegi tulajdonosnak.

A régi tulajdonos kerüljon be a régi tulajdonosok listájába.*/

function newOwner(neighborhood, adress, theNewOwner) {
  let house = getHouseByAdress(neighborhood, adress);
  if (!house) {
    console.log("A keresett ház nem létezik");
    return;
  }
  if (house.forSale) {
    house.formerOwner.push(house.owner);
    house.owner.money = house.owner.money + house.price;
    house.owner = theNewOwner;
    theNewOwner.money = theNewOwner.money - house.price;
  } else {
    console.log("A ház nem eladó");
  }
  if (house.owner.money < house.price) {
    console.log("Nincs elég pénze");
  }
}

newOwner(neighborhood, "Had utca 245/B", {
  firstName: "Márton",
  lastName: "Aladár",
  money: 14,
});

console.log(neighborhood);

//4.rész
/* A vásárlás függvényt egészítsd ki úgy, hogy

Vizsgálja meg, hogy a megvásárolni kívánt ház eladó-e
Ha igen, hajtsa végre a vásárlást úgy, hogy az új tulajtól levonja a pénzt és a réginek odaadja
Ha nem eladó, írjon ki egy üzenetet
Ha nincs elég pénze akkor is írjon ki egy üzenetet
*/

//2. feladat
/*Írj egy függvényt, ami a paraméterként beadott szám számjegyeinek összegét adja vissza */

function sumDigit(num) {
  let sum = 0;
  const numString = String(num);
  for (let i = 0; i < numString.length; ++i) {
    sum += Number(numString[i]);
  }
  return sum;
}
console.log(sumDigit(123456));

//3. feladat
/*Egy kisbolt termékeit kezelő programot kell létrehozni.

Minden terméknek van

neve
mennyisége
ára
cikkszáma
A termékeket egy tömbben tároljuk.

Írj egy függvényt, ami megmondja miből van hiány (kevesebb mint 5 db)
Írj egy függvényt, ami feltölti adott termék árukészletét (cikkszám és mennyiség alapján)
Írj egy függvényt, ami megváltoztatja az árát adott cikkszámú terméknek
Írj egy másik függvényt, ami leakciózza a terméket x százalékkal */

let product1 = {
  name: "Túrórudi",
  quantity: 2,
  price: 200,
  regNumber: 25264879,
};
let product2 = {
  name: "Wc papír",
  quantity: 15,
  price: 25,
  regNumber: 25264872,
};
let product3 = {
  name: "Tejszelet",
  quantity: 8,
  price: 150,
  regNumber: 25264871,
};
let product4 = {
  name: "Tuc sajtos",
  quantity: 3,
  price: 500,
  regNumber: 25264877,
};
let products = [product1, product2, product3, product4];
console.log(products);

function deficit(products) {
  let result = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].quantity < 5) {
      result.push(products[i]);
    }
  }
  return result;
}
console.log(deficit(products));

function deficitReload(products) {
  let deficitFilled = deficit(products);
  for (let i = 0; i <= deficit.length; i++) {
    deficitFilled[i].quantity = 5;
  }
}

deficitReload(products);
console.log(products);

function findProductByReg(products, regNum) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].regNumber == regNum) {
      return products[i];
    }
  }
}

function priceChanger(products) {
  let newPrice = findProductByReg(products, 25264871);
  newPrice.price = 5000;
  return newPrice;
}
priceChanger(products);
console.log(products);

function productOnSale(products, percentage) {
  let sale = findProductByReg(products, 25264879);
  sale.price = sale.price - (sale.price * percentage) / 100;
}

productOnSale(products, 10);
console.log(products);

//4. feladat
/*Készíts egy programot, amely ügyfélszolgálati eseteket kezel. Minden esethez tartozik ügyfél, leírás és egy státusz, ami lehet nyitott, megoldott, függőben, vagy lezárt. 
Ügyfél, leírás, vagy státusz nélkül nem lehet esetet létrehozni. 
A programnak lehetősége van új eset hozzáadására, eset státuszának frissítésére és az összes eset megjelenítésére, mindegyiket külön függvény valósítja meg. */

const tickets = [
  {
    customer: "Carl Customer",
    description: "My card got declined",
    status: "solved",
  },
  {
    customer: "Karen Kustomer",
    description: "My card got declined and I'm angry",
    status: "closed",
  },
  {
    customer: "Chris Martin",
    description: "I couldn't get in the venue",
    status: "open",
  },
];

function createTicket(costumer, description) {
  tickets.push({ costumer, description, status: "open" });
};
createTicket("Dr. Octopus", "I have too many arms");

console.log(tickets);

function statusUpdate(costumer, newStatus){
  for(let i = 0; i < tickets.length; i++){
    if(tickets[i].costumer == costumer){
      tickets[i].status = newStatus;
    }
  }
}
statusUpdate("Dr. Octopus", "pending");
console.log(tickets);

function printTickets(tickets){
  for(let i = 0; i < products.length; ++i){
    console.log(`A vásárló neve: ${tickets[i].customer}, Az eset leírása: ${tickets[i].description}, Az eset státusza: ${tickets[i].status}`);
  }
}
printTickets(tickets);