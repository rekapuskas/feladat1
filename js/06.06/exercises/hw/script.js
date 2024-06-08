//1. feladat
function square (number, power = 2){
    let originalNumber = number;
    while(power > 1){
        number = number * originalNumber;
        --power;
    }
    return number;
}
console.log(square(6));

//2.feladat
function fibonacci(quantity){
    let fibonacci = [];
    for (let i = 0; i <= quantity; ++i) {
        if (i == 1) {
          fibonacci.push(i);
        } else if (i == 0) {
          fibonacci.push(i);
        } else {
          fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
      }
      return fibonacci;
}
console.log(fibonacci(7));

//3.feladat
function prime(limit){
    if(limit < 2){
        return [];
    }
    let primeNumbers = [];
    let isPrime = [];
    isPrime[0] = isPrime[1] = false;
    for(let i = 2; i <= limit; ++i){
        isPrime[i] = true;
    }
    for(let i = 2; i <= limit; ++i){
        if(isPrime[i]){
            primeNumbers.push(i);
            for(let j = i * i; j <= limit; j = j + i){
                isPrime[j] = false;
            }
        }
    }
    return primeNumbers;
}
console.log(prime(7));

//4.feladat
function mostCommonNumber(array){
    const charFreqency = {};
    for(let i = 0; i < array.length; i++){
        const char = array[i];
        charFreqency[char] = (charFreqency[char] || 0) + 1;
    }
    const chars = Object.values(charFreqency);
    const values = Object.keys(charFreqency)
    let max = chars[0];
    for(let i = 0; i < chars.length; i++){
        if(chars[i] > max){
            max = chars.indexOf(chars[i]);
        }
    }
    console.log(values[max]);

}
(mostCommonNumber([2, 8, 8, 2, 8, 2, 8, 2, 2, 2]));
