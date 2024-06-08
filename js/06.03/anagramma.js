let firstWorld = prompt("Adj meg egy szót");
let secondWorld = prompt("Adj meg egy másik szót");
let anagramma = 0;
let j = secondWorld.length - 1;

if(firstWorld.length != secondWorld.length){
    console.log("Nem anagramma!");
} else {
    for(let i =0; i < firstWorld.length; ++i){
        if(firstWorld[i] == secondWorld[j]){
            ++anagramma;
            --j;
        }else{
            console.log("Nem anagramma");
            break;
        }
    }
}
if(firstWorld.length == anagramma){
    console.log("Anagramma");
} 
