//1.feladat
for(let a = 1; a <= 20; ++a){
    console.log(a);
}
//2.feladat
for(let a = 20; a >= 1; --a){
    console.log(a);
}
//3.feladat
let b = 1;
do{
    if(b % 2 == 0){
        console.log(b);
    }
    ++b;
} while(b <= 20);
//4.feladat
let c = 1;
do{
    if(c % 2 == 1){
        console.log(c);
    }
    ++c;
} while(c <= 20);
//5.feladat

for(let a = 10; (a >= 0 && a <= 10); --a){
    console.log(a);
    if(a == 0){
        let b = 1;
    }
}
//6.feladat
let numbers = [];
for(let i = 0; i < 21; ++i){
    numbers[i] = i;
}
console.log(numbers);

