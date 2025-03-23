let btn = document.getElementById('btn');
let resetButton = document.getElementById('reset-btn');
let change = document.getElementById('area');
let digit = 0;
btn.addEventListener('click', (event) => {
   digit++;
   change.textContent = digit;
});

resetButton.addEventListener('click', (event => {
   digit = 0;
   change.textContent = digit;
}));