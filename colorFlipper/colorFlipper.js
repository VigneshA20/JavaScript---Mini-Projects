let area = document.getElementById('area')
let btn = document.getElementById('btn')
let rbg = document.getElementById('rgb')

btn.addEventListener('click', (event) => {
    area.style.backgroundColor = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")"
    rbg.innerHTML = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")"
})