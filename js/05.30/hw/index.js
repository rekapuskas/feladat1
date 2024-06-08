//1.feladat
let tiger = {
    name: "Tigrisbigrincs",
    age: "2",
    genre: "tigris",
};
let giraffe = {
    name: "Zsiráf",
    age: "5",
    genre: "cat",
};
let shark = {
    name: "Cápamese",
    age: "7",
    genre: "cat",
};
let dog = {
    name: "Rex",
    age: "12",
    genre: "kutya",
};
let animals = [tiger, giraffe, shark];

animals.push(dog);
if(animals[animals.length -1].age >= 5){
    console.log(animals[animals.length -1].name, animals[animals.length -1].age)
}
//2.feladat
let cat = {
    name: "Kitekattusz",
    genre: "macska",
};
let bear = {
    name: "Maci",
    genre: "cat",
};
let animals2 = [cat, bear, dog];
if(animals2[animals2.length -1].genre == "kutya"){
    console.log(animals[animals.length -1].name)
}
//3.feladat
let animals3 = [tiger, giraffe, shark, dog, cat, bear];
for(let i = 0; i < animals3.length; ++i){
    if(animals3[i].genre == "cat"){
        console.log(animals3[i]);
    }
}