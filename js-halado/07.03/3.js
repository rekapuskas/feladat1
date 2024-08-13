document.getElementById("myInput").addEventListener("keydown", function () {
  let newText = document.getElementById("output");
  let myInput = document.getElementById("myInput");
  newText += myInput;
});
