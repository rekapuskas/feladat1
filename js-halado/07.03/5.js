const colorBox = document.getElementById("colorBox");
colorBox.addEventListener("mouseenter", function(){
    colorBox.style.backgroundColor = 'green';
})
colorBox.addEventListener("mouseleave", function(){
    colorBox.style.backgroundColor = '';
})
colorBox.addEventListener("click", function(){
    colorBox.style.backgroundColor = 'red';
})