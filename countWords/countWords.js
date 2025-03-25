let textarea = document.getElementById("textarea");
let btn = document.getElementById("btn");
let count = document.getElementById("count");




btn.addEventListener('click', () => {
    let str = textarea.value;
    console.log(str);

    
    let num = str.split(" ");
    console.log(num)

    let countWords = 0;
    for(let index=0; index<=num.length-1; index++)
{
     if(num[index] == "" || num[index] == '\n')
 {
     continue;
 }
    countWords++;
}
count.innerHTML = countWords;
})