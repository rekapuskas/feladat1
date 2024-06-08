//1.feladat
let sentences = ["Szeretem az almát.", "Szeretem a körtét.", "Szeretem a barackot", "Nem szeretem a körtét.", "Múlthéten vettem almát", "Nem eszek kiwit"];
console.log(sentences);
let wantedWorld = prompt("Írj be egy szót!");
for(let i = 0; i < sentences.length; ++i){
   let index = sentences[i].indexOf(wantedWorld);
   if(index > -1){
    console.log(sentences[i]);
   }
}
//2. feladat
let url = prompt("Adj meg egy url-t");
let valid = false;
if((url.startsWith("http://") || url.startsWith("https://")) && (url.endsWith(".com") || url.endsWith(".hu"))){
    valid = true;
}
if (valid){
    console.log("valid");
}else {
    console.log("nem valid")
}
//3.feladat
let a = prompt("Adj meg egy szót");
let b = prompt("Adj meg egy másikat");
let c = [];
let end = b.length;

if(a.length != b.length){
} else {
    for(let i = 0; i < a.length; ++i){
        if(a[i] == b[end-1]){
            c[i] = a[i];
            --end;
        }
    }
    console.log(c);
}
