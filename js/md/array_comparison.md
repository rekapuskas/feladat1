### Miért Nem Lehet Tömböket `==` Operátorral Összehasonlítani

JavaScriptben az `==` és `===` operátorok használatával történő összehasonlításkor az alapvető különbség az, hogy az `==` operátor típuskonverziót hajt végre (laza egyenlőség), míg a `===` operátor szigorú egyenlőséget ellenőriz (típuskonverzió nélkül). Azonban egyik operátor sem működik megfelelően tömbök összehasonlítására. Az okok a következők:

#### 1. Referencia Típusú Összehasonlítás

JavaScriptben a tömbök referencia típusok. Ez azt jelenti, hogy amikor két tömböt hasonlítunk össze az `==` vagy `===` operátorral, akkor azok memóriában lévő címét hasonlítjuk össze, nem pedig a tényleges tartalmukat.

##### Példa:

```javascript
let tomb1 = [1, 2, 3];
let tomb2 = [1, 2, 3];

console.log(tomb1 == tomb2); // false
console.log(tomb1 === tomb2); // false
```

Ebben a példában a `tomb1` és `tomb2` ugyanazokat az elemeket tartalmazzák, de különböző helyen vannak tárolva a memóriában, így az összehasonlításuk `false` értéket ad vissza.

#### 2. Objektumok és Tömbök Memóriakezelése

Mivel a tömbök és más objektumok referenciaként vannak tárolva, az összehasonlítás során a JavaScript csak azt ellenőrzi, hogy a két változó ugyanarra a referenciára mutat-e, nem pedig azt, hogy a két tömb elemei megegyeznek-e.

##### Példa:

```javascript
let tomb1 = [1, 2, 3];
let tomb2 = tomb1;

console.log(tomb1 == tomb2); // true
console.log(tomb1 === tomb2); // true
```

Ebben a példában a `tomb2` változónak ugyanaz a referenciája, mint a `tomb1` változónak, tehát az összehasonlítás `true` értéket ad vissza.
