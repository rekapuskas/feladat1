for(let i = 0; i < 13; ++i){
    const newElement = document.createElement('li');
    document.getElementById('myList').insertAdjacentElement("beforeend", newElement);
}
const myList = document.getElementById('myList').children;
for(let i = 0; i < myList.length; ++i){
    myList[i].innerHTML = 'Frissített elem';
}