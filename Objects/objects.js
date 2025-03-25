let item = {
    name : "phone",
    price : 25000,
    quantity : 1
}

console.log(item)
console.log(item.name)
console.log(item.price)
console.log(item.quantity)

console.log(item['name'])
console.log(item['price'])
console.log(item['quantity'])

for(let key in item)
{
    console.log(key)
}



let item2 = new Object();
item2.name = 'laptop';
item2.price = 345000;
item2.quantity = 2;

console.log(item2);


// TO ADD NEW KEY AND VALUE

item2.brand = 'samsung';

console.log(item2);




let key = 'price';
item[key] = 12345; // best
item.key = 54321;
console.log(item)




let item3 = {
    name : "phone",
    price : 25000,
    quantity : 1,
    buy : function()
    {
        console.log("item added to cart");
    },
    addToList()
    {
        console.log("item added to list");
    }
}

item3.buy();
item3.addToList();