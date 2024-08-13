const box = document.getElementById("myBox");
box.addEventListener("mousemove", function(event){
    const x = event.clientX;
    const y = event.clientY;
    document.getElementById("coords").innerHTML = `x: ${x}, y: ${y}`;
})