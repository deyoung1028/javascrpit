
let symbol = "ABC"
let title = "ABC"
let price = 340
let quantity = 10


let request  = new XMLHttpRequest()
request.open("POST", "https://endurable-bead-polo.glitch.me/stocks")
request.setRequestHeader("Content-Type", "application/json")

const body = {
    symbol: symbol,
    title: title,
    price: price,
    quantity: quantity
}

console.log()

request.send(JSON.stringify(body))