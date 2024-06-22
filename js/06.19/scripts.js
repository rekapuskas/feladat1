//1. feladat
/*Készíts egy függvényt, ami egy stringet kap meg paraméterként és visszaad egy olyan tömböt, ami a szöveget hullámzó formában tartalmazza!

wave("hello"); // ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']
wave("gól"); // [' Gól ', ' gÓl ', ' góL ']; */

function makeItWavy(word) {
  let wave = [];
  let newWorld = "";
  for (let i = 0; i < word.length; ++i) {
    let capital = word[i].toUpperCase();
    for (let j = 0; j < word.length; ++j) {
      if (j == i) {
        newWorld += capital;
      } else {
        newWorld += word[j];
      }
    }
    wave.push(newWorld);
    newWorld = "";
  }
}
makeItWavy("hello");

//2. feladat
/*Készíts egy függvényt, ami egy számokat tartalmazó tömböt kap meg paraméterként és a paraméterként megkapott tömböt úgy módosítja, hogy a tömbben lévő nullák a tömb hátuljára kerülnek! 
Úgy oldd meg a feladatot, hogy nem másolod a tömböt és nem készítesz új tömböt sem. 
// pl.

moveZeroes([0, 1, 0, 3, 12]); // [1, 3, 12, 0, 0]*/

function moveZeroes(arr) {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] == 0) {
      arr.push(arr[i]);
      arr.splice(i, 1);
    }
  }
  return arr;
}
moveZeroes([0, 1, 0, 3, 12]);

//3. feladat
/* Készíts egy olyan függvényt, ami egy 0 és 4000 közötti számot római számmá tud átalakítani! A római számot tartalmazó string legyen a visszatérési értéke!*/

let ROMAN_NUMBERS = ["I", "V", "X", "L", "C", "D", "M"];
function convertToRoman(num) {
    
}
convertToRoman(3418);
