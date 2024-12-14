let balance = 0;
const displaybalance = document.getElementById("disbln")
const contain = document.getElementsByClassName("container")
const amntin = document.getElementById("amntin")
function withdraw(amount) {
    amount = +(amntin.value)
    if (isNaN(amount) || amount < 0 || amount == "") {
        alert("Enter valid amount")
        return;
    }
    if (amount > balance) {
        alert("Insufficient Balance!")
    }
    else {
        balance -= amount
        displayBalance()
    }
    amntin.value = ""
}
function deposit() {
    amount = +(amntin.value)
    if (isNaN(amount) || amount < 0 || amount == "") {
        alert("Enter valid amount")
        return;
    }
    balance += amount
    displayBalance()
    amntin.value = ""
}
function checkbalance() {
    alert(`your current balance is ${balance}`)
}
function displayBalance() {
    displaybalance.textContent = "Balance:Rs." + balance
}
