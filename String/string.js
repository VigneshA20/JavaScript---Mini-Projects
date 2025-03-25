 // STRINGS ARE IMMUTABLE



 // STRING METHODS




 let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";






 //STRING LENGTH
 console.log("String : ", str);
 console.log("Str Length : ", str.length); 



// /* EXTRACTING STRING PARTS

// -----------------------------------------------------------------                            
// slice(start index , end index)           ---   start and ends with index (length -1)      
// substring(start index, end index)       ---   start and ends with index (length -1) 

//   ----------------- DIFFERENCE ----------------------------
// slice ------------------    accept negative values
// substring --------------   cannot accept negative values
// -----------------------------------------------------------------             
// substr(start index, length)       ---   index starts with index ends with length   


// */


 console.log("Str slice(start, end) : ", str.slice(1,10)); 
 console.log("Str slice(start, end) : ", str.substring(1,10));
 console.log("Str slice(start, end) : ", str.substr(1,10)); 

 //----------------------------------------------------------------------------------------






 console.log("Replaced String : ", str.replace("ABCDEFGHIJKL", "QWERTY"));
 console.log("Original String : ", str)

 console.log("Concat str + str :", str.concat(" ", str))


 let trimString = "                                Hello World         ";
 console.log("Without Trim :" , trimString);
 console.log("Trimming the String : ", trimString.trim())





 //padStart(length, character)
 //padEnd(length, character)

 console.log("padStart :", str.padStart(30, 'a'))
 console.log("padEnd :", str.padEnd(30, 'a'))








 //EXTRACTING STRING CHARACTERS

 //charAt(index position) 
 //charCodeAt(index position)

 let newStr = "";
 let charCode = 0;
 for(let index =0; index<=str.length-1; index++)
     {  newStr += str.charAt(index);
         charCode += str.charCodeAt(index);
     }

     console.log("charAt() : ", newStr)
     console.log("charCodeAt() of Z : ", charCode)




 //--------------------------Palindrome -------------------------------------------------
     let originalStr = "palindrome";
     let reverseStr = "";
     for(let index =originalStr.length-1 ; index >= 0; index--)
     {
         reverseStr += originalStr.charAt(index);
        
     }
    

     if(originalStr == reverseStr)
     {
         console.log(originalStr + " == " + reverseStr)
         console.log("Palindrome");
     }
     else{
         console.log(originalStr + " != " + reverseStr)
         console.log("Not a Palindrome");
     }





    let oriStr = "malayalam";
    let left = 0;
    let right = oriStr.length-1;

    while(left <= right)
    {
        if(oriStr[left] == oriStr[right])
        {
            console.log(oriStr[left]  + "  ==  " + oriStr[right])
            left++;
            right--;
        }
        else{
            console.log(oriStr[left]  + "  !=  " + oriStr[right])
            console.log("Not a Palindrome");
            break;

        }
    }
 if(left > right)
    {
        console.log("Palindrome")
    }
   
//--------------------------------------------------------------------------------





// console.log(str)
// str = str.split("").reverse();
// console.log(str)

let Reverse ="";
for(let index=0; index<=str.length-1; index++)
{
    Reverse += str.charAt(index); 
}
console.log(Reverse)




console.log("String Search : ", str.search('A')) // if true returns starting index position 
console.log("String Search : ", str.search('EFG')) // if true returns starting index position 
console.log("String Search : ", str.search('ADC')) // if false returns -1



console.log(str.includes("A")) // if true returns boolean
console.log(str.includes("ABC")) // if true returns boolean
console.log(str.includes("ADC")) // if false returns boolean





// PRINT A RANDOM LETTER FROM YOUR NAME -----------------------------
let myName = "Vignesh"; //6
console.log("V=0, i=1, g=2, n=3, e=4, s=5, h=6");

for(let index=0; index<3; index++)
{
    
    randomNum = Math.floor(Math.random() * 6 + 1);
    console.log("randomNum :", randomNum); 
    console.log(myName[randomNum]);
}

//------------------------------------------------------------------------









// TEMPLATE LITERALS

let itemCount = 5, total = "$95";

console.log(`You have ${itemCount} items in Your Cart.
Your bill Amount is ${total}.`);