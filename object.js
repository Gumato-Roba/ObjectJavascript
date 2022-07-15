//Assignment 1
let  CalcultePurchases = [
{
    name: "Apple",
    quantity: 2,
    price: 30.00,
}
]
 function getTotalCost(name,quantity){
    let cost=CalcultePurchases.find(item=>item.name===name)
    console.log(`${quantity} ${name} for KES ${cost.price*quantity}`);
     
}
getTotalCost("Apple",2)