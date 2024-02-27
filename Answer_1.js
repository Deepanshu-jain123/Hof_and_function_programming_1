const ordersList = [
    { name:"Laptop",price: 120000},
    { name:"Mobile",price:70000},
    { name:"Mobile Charger", price:1500},
    { name:"Laptop Charger",price: 10500},
];
sum = 0;
function totalSum(ordersListParameter){
        ordersList.forEach((data)=>{
        sum = sum + data.price;
        
    })
    console.log(`The total price is Rs. ${sum}`)
}
totalSum(ordersList)