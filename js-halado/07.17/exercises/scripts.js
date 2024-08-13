const warehouse = [
  [
    { category: "table", name: "Asztallap", amount: 10 },
    { category: "cabinet", name: "Szekrényajtó", amount: 2 },
    { category: "flower", name: "Virágföld", amount: 7 },
  ],
  [
    { category: "flower", name: "Virág", amount: 2 },
    { category: "table", name: "Asztalláb", amount: 11 },
    { category: "cabinet", name: "Szekrényfogantyú", amount: 11 },
    { category: "table", name: "Asztalfiók", amount: 4 },
  ],
  [
    { category: "flower", name: "Virágcserép", amount: 11 },
    { category: "cabinet", name: "Szekrénypolc", amount: 2 },
  ],
];

const mainContainer = document.getElementById("main-container");

warehouse.forEach((shelf) => {
  const divShelf = document.createElement("div");
  divShelf.classList.add("shelf");
  mainContainer.append(divShelf);
  shelf.forEach((product) => {
    if(product.amount >= 3){
      divShelf.insertAdjacentHTML(
        "beforeend",
        ` <div class= "${product.category} product">
            <h1>${product.name}</h1>
            <h2>${product.amount}</h2>
          </div>`
      );
    } else{
      divShelf.insertAdjacentHTML(
        "beforeend",
        ` <div class= "${product.category} out-of-stock">
            <h1>${product.name}</h1>
            <h2>${product.amount}</h2>
          </div>`
      );
    }
    
  });
});

/*Az egyes gombokra rákattintva csökken minden termékből 1 ami az adott kategóriához tartozik */
 function wantedProducts(event){
  let wantedThings = document.querySelectorAll(`.${event.target.id}`);
  wantedThings.forEach((wantedThing) => {
    wantedThing.classList
  })
 }

/*Az egyes gombokra rákattintva csökken minden termékből 1 ami az adott kategóriához tartozik */
function updateShelf(product, indexShelf, indexProduct) {
  let shelfs = document.getElementsByClassName("shelf");
  let modifiedShelf = shelfs[indexShelf].children;
  updateProduct(product, modifiedShelf, indexProduct);
}

function updateProduct(product, modifiedShelf, indexProduct) {
  if (product.amount <= 3) {
    modifiedShelf[indexProduct].classList.add("out-of-stock");
  }
  modifiedShelf[indexProduct].innerHTML = `<h1>${product.name}</h1>
  <h2>${product.amount}</h2>`;
}
 function checkStock(product, event, indexProduct, indexShelf){
  if (product.category == event.target.id) {
    try {
      if (product.amount > 0) {
        product.amount -= 1;
        updateShelf(product, indexShelf, indexProduct);
      } else {
        throw new Error("A termék elfogyott");
      }
    } catch {
      alert("A termék elfogyott");
    }
  }
 }
const buttons = document.querySelectorAll(".mybutton");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    warehouse.forEach((shelf, indexShelf) => {
      shelf.forEach((product, indexProduct) => {
        if (product.category == event.target.id) {
          try {
            if (product.amount > 0) {
              product.amount -= 1;
              //foreach>0
              updateShelf(product, indexShelf, indexProduct);
            } else {
              wantedProducts(event);
              throw new Error("A termék elfogyott");
            }
          } catch {
            alert("A termék elfogyott");
          }
        }
      });
    });
  });
});