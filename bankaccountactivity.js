
class BankAccount {
    constructor(balance, accountType){
    this.balance = balance
    this.accountType = accountType
    }

    deposit(amount) {
        this.balance += amount
    }

    withdraw(amount) {
        if(amount < this.balance) {
            this.balance -= amount
        }
    }

}

let bankAccount = new BankAccount(500, "personal")
bankAccount.deposit(100)
bankAccount.withdraw(50)

console.log(bankAccount.balance)
