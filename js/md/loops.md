### Ciklusok Magyarázata JavaScriptben

A ciklusok lehetővé teszik, hogy egy kódrészletet többször végrehajtsunk. Ez különösen hasznos ismétlődő feladatoknál, például egy tömb összes elemének feldolgozásánál. JavaScriptben többféle ciklus létezik:

1. `for` ciklus
2. `while` ciklus
3. `do...while` ciklus

### 1. `for` ciklus

A `for` ciklus a legismertebb és leggyakrabban használt ciklus. Három részből áll: inicializálás, feltétel és iterátor.

#### Szintaxis:

```javascript
for (inicializálás; feltétel; iterátor) {
    // Kódblokk, amely végrehajtásra kerül minden iterációban
}
```

#### Példa:

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i); // Kiírja: 0, 1, 2, 3, 4
}
```

### 2. `while` ciklus

A `while` ciklus addig ismétli a kódrészletet, amíg a feltétel igaz (`true`).

#### Szintaxis:

```javascript
while (feltétel) {
    // Kódblokk, amely végrehajtásra kerül minden iterációban, amíg a feltétel igaz
}
```

#### Példa:

```javascript
let i = 0;
while (i < 5) {
    console.log(i); // Kiírja: 0, 1, 2, 3, 4
    i++;
}
```

### 3. `do...while` ciklus

A `do...while` ciklus hasonló a `while` ciklushoz, de ebben az esetben a kódblokk legalább egyszer végrehajtásra kerül, mielőtt a feltétel ellenőrzésre kerül.

#### Szintaxis:

```javascript
do {
    // Kódblokk, amely végrehajtásra kerül
} while (feltétel);
```

#### Példa:

```javascript
let i = 0;
do {
    console.log(i); // Kiírja: 0, 1, 2, 3, 4
    i++;
} while (i < 5);
```
