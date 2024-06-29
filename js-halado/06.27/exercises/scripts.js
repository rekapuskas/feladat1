const users = {
  "7eb0cf2a-4bb9-4429-ab47-53a7899b5161": {
    username: "johndoe10",
    email: "doe@gmail.com",
    age: 18,
  },
  "2d9920a9-de32-4214-b531-7823cc0b37c6": {
    username: "fernando99",
    email: "fernando@gmail.com",
    age: 33,
  },
  "176d9edb-0bf7-4913-84a9-efe8d0f9a659": {
    username: "murraytodd",
    email: "murraytodd@gmail.com",
    age: 51,
  },
  "98a94d14-a1ab-4386-ad34-17d76202550a": {
    username: "kobelewis",
    email: "lewis1010@gmail.com",
    age: 12,
  },
};

//1. feladat
let result = [];
for (let key in users) {
  result.push(users[key]);
}
console.log(result);

//2. feladat
for (let key in users) {
  users[key].id = key;
}
let result2 = [];
for (let key in users) {
  result2.push(users[key]);
}
console.log(result);

//3. feladat
result.sort((a, b) => a.age - b.age);
console.log(result);
