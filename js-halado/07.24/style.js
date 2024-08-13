//1. feladat
/*Adott egy tömb:

const animalList = ["dog", "cat", "giraffe", "elephant"];
Ennek a tömbnek az elemeit helyezd el egy rendezetlen listában (unordered list) egy HTML fájlban!

Bónusz: alakítsd át a tömböt úgy, hogy állatok adatait tartalmazó objektumok legyenek benne (pl. név, életkora, lábainak száma) és ezeket is jelenítsd meg ki a HTML fájlban.*/

/*const animalList = [
  { genre: "dog", age: 12, feet: 4 },
  { genre: "cat", age: 5, feet: 4 },
  { genre: "giraffe", age: 3, feet: 4 },
  { genre: "elephant", age: 1, feet: 4 },
];
const mainContainer = document.getElementById("main-container");
const img = document.createElement("img");
img.src =
  "https://infostart.hu/images/site/articles/lead/2021/04/1619783513-mMxUCRcwk_md.jpg";
mainContainer.append(img);
animalList.forEach((animal) => {
  const unorderedList = document.createElement("ul");
  const listElement = document.createElement("li");
  listElement.innerHTML = `Faj: ${animal.genre} Kor: ${animal.age}, Lábak száma: ${animal.feet}`;
  unorderedList.append(listElement);
  mainContainer.append(unorderedList);
});
/*
//2. feladat
/*Adott a következő HTML kód:
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>

<ul>
    <li>a</li>
    <li>b</li>
    <li>c</li>
</ul>

<ul>
    <li>I</li>
    <li>II</li>
    <li>III</li>
</ul>
Írj egy olyan scriptet, ami a HTML-ben található összes <ul>-ben az első listaelem szövegét kicseréli arra, hogy első és az utolsó listaelem szövegét pedig arra, hogy utolsó.*/

document.querySelectorAll('ul > li:first-child').forEach((firstElement) => {
    firstElement.innerHTML = "első";
});
document.querySelectorAll('ul > li:last-child').forEach((lastElement) => {
    lastElement.innerHTML = "utolsó";
});

//4. feladat
/*Készíts egy unordered listet, aminek bármely elemére kattintva felugrik egy prompt és a promptban megadott szövegre átírja a megkattintott listaelem szövegét!

Bónusz: A lista alá hozz létre egy inputot és egy gombot, és a gombra kattintva jöjjön létre egy új listaelem, aminek a szövege az inputban megadott szöveg legyen!*/ 

const clickableUl = document.getElementById("clickable-list").querySelectorAll('li');
clickableUl.forEach((element) => {
    element.addEventListener("click", function (event){
        const text = prompt();
        element.textContent = text;
    })
})
//5. feladat
/*A felhasználó valahol beadja, hogy hány percig számoljon vissza az alkalmazás. 
Ezután a Start gombra kattintva a timerünk másodpercenként visszaszámol. Az alkalmazás a hátralevő időt perc:másodperc formában mutatja.*/

const timer = prompt("Adja meg az időt");