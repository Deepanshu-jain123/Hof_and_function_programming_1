let expenses =[
    { amount: 100, category: "Utilities"},
    { amount: 200, category: "Groceries"},
    { amount: 50, category: "Entertainment"},
];
function taxUsingMap(data){
    let addText = data.map(data=>{
        data.taxInAmount = data.amount = data.amount + (data.amount*10)/100
        return data
    })
    return addText
}
console.log(taxUsingMap(expenses));












