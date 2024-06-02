let numberOne = Number(prompt("Adj meg egy számot!"));
let operation = prompt("Adj meg egy operációs jelet!");
let numberTwo = Number(prompt("Adj meg egy másikat!"));
let solution;
if(operation == "+"){
    solution = numberOne + numberTwo;
} 
else if(operation == "-"){
    solution = numberOne - numberTwo;
}
else if(operation == "*"){
    solution = numberOne * numberTwo;
}
else if(operation == "/"){
    solution = numberOne / numberTwo;
}
alert(numberOne + operation + numberTwo + "=" + solution);

