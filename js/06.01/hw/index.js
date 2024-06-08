const library = [
  {
    title: "Egri csillagok",
    author: "Gárdonyi Géza",
    year: "1989",
    returned: false,
  },
  {
    title: "Csepeli csillagok",
    author: "Gárdonyi Imre",
    year: "1789",
    returned: true,
  },
  {
    title: "Váci csillagok",
    author: "Gárdonyi Örs",
    year: "1989",
    returned: false,
  },
  {
    title: "Német csillagok",
    author: "Gárdonyi Ede",
    year: "2001",
    returned: true,
  },
  {
    title: "Balatoni csillagok",
    author: "Gárdonyi Emese",
    year: "2024",
    returned: false,
  },
  {
    title: "Fehérvári csillagok",
    author: "Gárdonyi Réka",
    year: "1174",
    returned: true,
  },
];
let first3Books = library.slice(0, 3);
console.log(first3Books);
library.splice(library.length / 2, 1, {
  title: "Köki csillagok",
  author: "Puskás Réka",
  year: "1999",
  returned: true,
});
console.log(library);
//4.
let newLibrary = library.concat(first3Books);
let wantedBook = prompt("Adj meg egy könycímet");
console.log(newLibrary);
let index = newLibrary.indexOf(wantedBook);
console.log(index);
//8.
let max = newLibrary[0];
for(let i = 0; i < newLibrary.length; ++i){
    if(newLibrary[i].year < max.year){
        max = newLibrary[i];
    }
}
console.log(max.title, max.year);
