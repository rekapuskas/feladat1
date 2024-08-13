const ex1 = new Promise((resolve) => {
  setTimeout(resolve("Siker"), 2000);
}).then((result) => console.log(result));

//2. feladat
/*Hozz létre egy Promise-t, amely 3 másodperc után generál egy random számot, 
és ha szám nagyobb mint 0.5, akkor sikeresen teljesül, egyéb esetben pedig nem. */
 
const ex2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const random = Math.random();
        if(random > 0.5){
            resolve(random);
        }else{
            reject(random);
        }
    }, 2000);
   
})
ex2.then((result) => console.log(result)).catch((error) => console.error(error));