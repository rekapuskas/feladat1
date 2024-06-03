let animals = ["Cat", "Dog", "Mouse", "Cow", "Shark"];
console.log(animals);
console.log(`Első elem: ${animals.shift()}`);
console.log(`Utolsó elem: ${animals[animals.length - 1]}`);
animals[1] = "Bear";
animals[3] = "Squirrel";
console.log(animals);
console.log(animals.length);
