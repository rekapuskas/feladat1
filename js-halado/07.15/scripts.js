async function myFn (){
    return 1;
}
myFn().then((result) => console.log(result));

async function f(){
    let promise = new Promise ((resolve, reject => {
        setTimeout(() => resolve("done"), 3000);
    })) 
}