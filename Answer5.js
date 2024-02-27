let expenses =[
    { amount: 100, category: "Utilities"},
    { amount: 200, category: "Groceries"},
    { amount: 50, category: "Entertainment"},
];
data1 = 0
// sum = 0
let totalAmount = expenses.reduce((accumulator,dataCurrent)=>{
    console.log(`sum = ${accumulator} & nextNum =${dataCurrent.amount}`)
    return accumulator + dataCurrent.amount;
},0); 
console.log(totalAmount)