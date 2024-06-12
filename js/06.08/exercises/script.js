//1. feladat

function phoneNumber() {
  const parts = [];
  for (let i = 0; i < 4; i++) {
    parts.push(prompt(`${i + 1}.rész`));
  }
  let txt = "";
  for(let i = 0; i < parts.length; ++i){
    txt += `-${parts[i]}`
  }
  console.log(txt);
}
phoneNumber();

//2. feladat
function getTheAmountsOfVowels(word) {
  word = "alma";
  const vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;

  for (let i = 0; i < word.length; ++i) {
    for (j = 0; j < vowels.length; ++j) {
      if (word[i] == vowels[j]) {
        ++counter;
      }
    }
  }
  console.log(counter);
}
getTheAmountsOfVowels("alma");

//3. feladat
function replacer(word, letter1, letter2) {
  let newWorld = "";
  for (let i = 0; i < word.length; ++i) {
    if (word[i] == letter1) {
      newWorld = newWorld + letter2;
    }else{
        newWorld += word[i];
    }
  }
  console.log(newWorld);
}
replacer("hello", "l", "y");
 
//4. feladat kész
function mostCommonElement(arr) {
    const occurencies = {};

    for (let i = 0; i < arr.length; i++) {
        if(occurencies[arr[i]]){
            occurencies[arr[i]] += 1;
        }else{
            occurencies[arr[i]] = 1;
        }
    }
    const result = Object.keys(occurencies);

   console.log(result);
}
mostCommonElement([2, 2, 3, 4, 5, 6, 2, 5, 4, 2]);

//5. feladat kész
function makeCompact(arr){
    let compactArray = [];
    for(let i = 0; i < arr.length; ++i){
        if((typeof arr[i] !== 'undefined') && (arr[i] !== null) && (arr[i] !== "")){
            compactArray.push(arr[i]);
        }
    }
    console.log(compactArray);
}
makeCompact([ undefined, undefined, 2, "", 3, null, undefined, 5, ""]);

//6. feladat


//7. feladat kész
function isEqual(arr1, arr2){
    let equal;
    for(let i = 0; i < arr1.length; ++i){
        if(arr1[i] != arr2[i]){
            equal = false;
            break;
        }else{
            equal = true;
        }
    }
    console.log(equal);
}
isEqual([1 , 2, 3], [1, 2]);
isEqual([1, 4], [1, 2, 3]);

//8.feladat
const user1 = {
    name: 'Réka',
    age: '25',
    emialAdress: 'rekavalami@gmail.com',
    userName: 'pukec3',
    passworld: 'cica123',
    adult: false,
}
const user2 = {
    name: 'Béla',
    age: '15',
    emialAdress: 'belavalami@gmail.com',
    userName: 'pbela3',
    passworld: 'cica123',
    adult: false,
}
const user3 = {
    name: 'Károly',
    age: '35',
    emialAdress: 'karoly@citromail.com',
    userName: 'pkarcsi33',
    passworld: 'pass',
    adult: true,
}

let users = [user1, user2, user3];
console.log(users);

//3.részfeladat
function adultCounter(arr){
    let counter = 0;
    for(let i = 0; i < arr.length; ++i){
        if(arr[i].adult)
            ++counter;
    }
    return counter;
}

alert(`There are ${adultCounter(users)} adults in this list`);

//4. részfeladat

function getGmailUsers(arr){
    let gmailUsers = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].emialAdress.endsWith('gmail.com')){
            gmailUsers.push(arr[i]);
        }
    }
    return gmailUsers;
}
console.log(getGmailUsers(users));

//5.részfeladat

function getYoungestUser(arr){
    let youngest = arr[0].age;
    let youngestPerson;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].age < youngest){
            youngest = arr[i].age;
            youngestPerson = arr[i].name;
        }
    }
    return youngestPerson;
}
console.log(getYoungestUser(users));

//6. részfeladat

function removeEmailAdress(param){
    for(let i = 0; i < users.length; i++){
        if(users[i].emialAdress == param){
            users.shift();
            return (users[i]);
        }
    }
}
console.log(removeEmailAdress('karoly@citromail.com'));