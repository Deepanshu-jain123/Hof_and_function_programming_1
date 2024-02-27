let expenses =[
    { amount: 100, category: "Utilities"},
    { amount: 200, category: "Groceries"},
    { amount: 50, category: "Entertainment"},
];
const groceriesExpenses = expenses.filter((data)=>{
    return data.category==="Groceries"
})
console.log(groceriesExpenses)