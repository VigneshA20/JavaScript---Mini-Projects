let input = document.getElementById("input");
let btn = document.getElementById("btn");
let area = document.getElementById("area")
let num = 0;


btn.addEventListener('click', (event) => {
  area.innerHTML += '<li>'+ input.value +'</li>'
  input.value = "";
})