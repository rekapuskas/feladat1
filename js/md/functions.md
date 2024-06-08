## Függvények JavaScript-ben

### Függvény Deklarálása

A függvények olyan kódrészletek, amelyeket újra és újra felhasználhatunk a programunkban. JavaScript-ben többféleképpen deklarálhatunk függvényeket.

#### Hagyományos Függvény Deklaráció

##### Szintaxis:

```javascript
function fuggvenyNeve(param1, param2, ...) {
    // kódrészlet
}
```

### Függvény Paraméterek

A függvény paraméterek olyan változók, amelyeket a függvény hívásakor adunk át a függvénynek. Ezek a paraméterek a függvény belsejében használhatók. Akármennyi paramétert megadhatunk (akár 0-t is). A paramétereket vesszővel kell elválasztani.

##### Példa:

```javascript
function welcome(nev) {
    console.log("Szia, " + nev + "!");
}

koszont("Anna"); // Szia, Anna!
```

### Függvény Visszatérési Értéke

A függvények visszatérhetnek egy értékkel a `return` kulcsszó segítségével. Ha a függvény eléri a `return` kulcsszót, a végrehajtás leáll, és a megadott érték visszatér a függvény hívójához.

##### Példa:

```javascript
function multiply(a, b) {
    return a * b;
}

let result = szorzas(3, 4);
console.log("Az eredmény: " + result); // Az eredmény: 12
```

### Változók Scope-ja Függvényekben

A scope (hatókör) azt határozza meg, hogy a változók hol érhetők el a programban. JavaScript-ben háromféle scope létezik: globális, függvény és blokkszintű.

#### Globális Scope

A globális változók bárhonnan elérhetők a kódban.

##### Példa:

```javascript
let globalisValtozo = "Ez egy globális változó";

function mutatGlobalisValtozo() {
    console.log(globalisValtozo);
}

mutatGlobalisValtozo(); // Ez egy globális változó
```

#### Függvény Scope

A függvényen belül deklarált változók csak a függvényen belül érhetők el.

##### Példa:

```javascript
function mutatValtozo() {
    let lokalisValtozo = "Ez egy lokális változó";
    console.log(lokalisValtozo);
}

mutatValtozo(); // Ez egy lokális változó
// console.log(lokalisValtozo); // Hiba: lokalisValtozo nem definiált
```

#### Blokkszintű Scope

A blokkszintű változók (let és const) csak a blokkban érhetők el, ahol deklarálták őket, például egy if vagy for ciklusban.

##### Példa:

```javascript
function tesztScope() {
    if (true) {
        let blokkszintuValtozo = "Ez egy blokkszintű változó";
        console.log(blokkszintuValtozo);
    }
    // console.log(blokkszintuValtozo); // Hiba: blokkszintuValtozo nem definiált
}

tesztScope();
```
