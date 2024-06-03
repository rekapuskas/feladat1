const number = [10, -4, 8, 7, 12, -3, 11, 11, 7, -1];
let sum = 0;
for(let i = 0; i < number.length; ++i){
    sum = sum + number[i];
}
console.log(sum);
let max = 0;
for(let i = 0; i < number.length; ++i){
    if(number[i] > max){
        max = number[i];
    }
}
console.log(max);
let min = 0;
for(let i = 0; i < number.length; ++i){
    if(number[i] < min){
        min = number[i];
    }
}
console.log(min);
console.log(sum/number.length);
const even = [];
for(let i = 0; i < number.length; ++i){
    if(number[i] % 2 == 0){
        even.push(number[i]);
    }
}
console.log(even);
const odd = [];
for(let i = 0; i < number.length; ++i){
    if(number[i] % 2 != 0){
        odd.push(number[i]);
    }
}
console.log(odd);