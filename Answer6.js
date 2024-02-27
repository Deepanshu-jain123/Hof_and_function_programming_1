let expenses =[
    { amount: 100, category: "Utilities"},
    { amount: 200, category: "Groceries"},
    { amount: 50, category: "Entertainment"},
];
function categorizeExpense(data){
    let categorizedExpenses = data.map(data=>{
        if(data.amount>100){
            data="High Expense"
        }
        else{
            data="Low Expense"
        }
        return data
    })
    return categorizedExpenses
}
console.log(categorizeExpense(expenses))
