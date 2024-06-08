
//5. feladat
function parity(start, end, boolean){
    if(boolean == true){
        if(start % 2 == 0){
            for(let i = start; i <= end; i = i + 2){
                console.log(i);
            }
        }else{
            for(let i = start + 1; i <= end; i = i + 2){
                console.log(i);
            }
        }
    }else{
        if(start % 2 == 0){
            for(let i = start + 1; i <= end; i = i + 2){
                console.log(i);
            }
        }else{
            for(let i = start; i <= end; i = i + 2){
                console.log(i);
            }
        }
    }
}
parity(2, 7, false);

//7.feladat
function valami(a){
    for(let i = a; i >= 0; --i){
        console.log(i);
        if(i == 0){
            
        }
    }
}