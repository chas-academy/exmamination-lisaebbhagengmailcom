const desc=document.getElementById("desc")
const amount=document.getElementById("amount") 
const incomeBtn=document.getElementById("incomeBtn")
const expenseBtn=document.getElementById("expenseBtn")
const incomeList=document.getElementById("incomeList")
const expenseList=document.getElementById("expenseList")
const transactionList=document.getElementById("transactionList")
const balance=document.getElementById("balance")

let income = []
let expense= []

function addToIncome(){
    const transactionDesc=desc.value
    const transactionAmount=Number(amount.value)

    const newTransaction={
        desc: transactionDesc,
        amount: transactionAmount,
    }
    income.push(newTransaction)

    desc.value =""
    amount.value="" 
    renderIncome(newTransaction)
}
function addToExpense(){
    const transactionDesc=desc.value
    const transactionAmount=Number(amount.value)

    const newTransaction={
        desc: transactionDesc,
        amount: transactionAmount,
    }
    expense.push(newTransaction)

    desc.value =""
    amount.value="" 
    renderExpense(newTransaction)
}

function renderIncome(transaction){
    const li=document.createElement("li")
    li.textContent=`${transaction.desc} - ${transaction.amount} kr (Inkomst)`
    incomeList.appendChild(li) 
    updateBalance()
}

function renderExpense(transaction){
    const li=document.createElement("li")
    li.textContent=`${transaction.desc} - ${transaction.amount} kr (Utgift)`
    expenseList.appendChild(li) 
    updateBalance()
}

function updateBalance() {
    let incomeTotal = income.reduce((sum, item) => sum + item.amount, 0);
    let expenseTotal = expense.reduce((sum, item) => sum + item.amount, 0);
    balance.textContent = `${incomeTotal - expenseTotal}`;
}


incomeBtn.addEventListener("click", () => {
    addToIncome ()
})
expenseBtn.addEventListener("click", () => {
    addToExpense ()
})