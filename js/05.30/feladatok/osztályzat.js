const name = prompt("Add meg a nevedet!");
const res1 = Number(prompt("Add meg az első dolgozat pontszámát!"));
const res2 = Number(prompt("Add meg a második dolgozat pontszámát!"));
const res3 = Number(prompt("Add meg a harmadik dolgozat pontszámát!"));
const avarage = (res1 + res2 + res3)/3;
let grade;
if(avarage <= 49){
    grade = "F";
}
else if(avarage >= 50 && avarage <= 59){
    grade = "E";
}
else if(avarage >= 60 && avarage <= 69){
    grade = "D";
}
else if(avarage >= 70 && avarage <= 79){
    grade = "C";
}
else if(avarage >= 80 && avarage <= 89){
    grade = "B";
}
else if(avarage >= 90 && avarage <= 100){
    grade = "A";
}
alert(`Az átlagod: ${avarage} és a minősítésed ${grade}`);