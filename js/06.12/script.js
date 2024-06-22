//1.feladat
let employee1 = {
    name: "Nagy Károly",
    salary: 450000,
}
let employee2 = {
    name: "Ónodi Mária",
    salary: 280000,
}
let employee3 = {
    name: "Ferencz László",
    salary: 350000,
}
let employees = [employee1, employee2, employee3];
function bonusCalculator(arr){
    for(let i = 0; i < arr.length; ++i){
        arr[i].bonus = arr[i].salary * 0.1;
    }
    return arr;
}
console.log(bonusCalculator(employees));

//2. feladat

let day1 = {
    morning: 15,
    noon: 18,
    night: 16,
};
let day2 = {
    morning: 10,
    noon: 16,
    night: 12,
};
let day3 = {
    morning: 18,
    noon: 18,
    night: 16,
}
let day4 = {
    morning: 18,
    noon: 11,
    night: 16,
};
let day5 = {
    morning: 14,
    noon: 18,
    night: 16,
}

let temperature = [day1, day2, day3, day4, day5];
function avarageTemperature(arr){
    for(let i = 0; i < arr.length; i++){
        temperature[i].avarage = (temperature[i].morning + temperature[i].noon + temperature[i].night)/3;
    }
    return arr;
}
console.log(avarageTemperature(temperature));