let btn = document.getElementById('btn')
let input = document.getElementById('input')
let area = document.getElementById('area')

btn.addEventListener('click', (event) => {
    area.innerHTML = Number(input.value / 2.54).toFixed(2) + " inches";
})