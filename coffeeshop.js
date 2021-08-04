const getcoffeeorderbtn = document.getElementById("getcoffeeorderbtn")
const coffeeorderUL = document.getElementById("coffeeorderUL")
const custEmail = document.getElementById("custEmail")
const typesofcoffee = document.getElementById("typesofcoffee")
const sizeofcoffee = document.getElementById("sizeofcoffee")
const price = document.getElementById("price")
const addOrderBtn = document.getElementById("addOrderBtn")
const custEmailtoDelete = document.getElementById("custEmailtoDelete")
const deletebtn = document.getElementById("deletebtn")

sizeofcoffee.addEventListener("change", function(){
    console.log(sizeofcoffee.value, price.value)
    if (sizeofcoffee.value == "small"){
        price.value = 3.99
    }else if (sizeofcoffee.value == "medium"){
        price.value = 4.99
    }else if (sizeofcoffee.value == "large"){
        price.value = 5.99
    }
})
getcoffeeorderbtn.addEventListener("click", function(){
    getAllCoffeeOrders()
})
function getAllCoffeeOrders() {

    let coffeeRequest = new XMLHttpRequest()
    coffeeRequest.open("GET", "https://troubled-peaceful-hell.glitch.me/orders")
    coffeeRequest.send()

    coffeeRequest.addEventListener("load", function(){
        const coffeeOrders = JSON.parse(this.responseText)
        const coffeeOrdersItems = coffeeOrders.map((order)=>{
            return `<li> 
                  <div>  ${order.email}</div>
                  <div>  ${order.type}</div>
                  <div>  ${order.size}</div>
                  <div>  ${order.price}</div>
            </li>`
        })
        coffeeorderUL.innerHTML = coffeeOrdersItems.join("") 
    })
}
addOrderBtn.addEventListener("click", function(){
const body = { 
    email:custEmail.value,
    type:typesofcoffee.value,
    size:sizeofcoffee.value,
    price:price.value
}
let request = new XMLHttpRequest()
request.open("POST", "https://troubled-peaceful-hell.glitch.me/orders")
request.setRequestHeader("Content-Type", "application/json")
request.send(JSON.stringify(body))
})


function deleteCoffeeOrder() {
    const orderToBeDeleted = `https://troubled-peaceful-hell.glitch.me/orders/${custEmailtoDelete.value}`
    let deleteRequest = new XMLHttpRequest()
    deleteRequest.open("DELETE", orderToBeDeleted)
    deleteRequest.send()
    alert("YOUR ORDER HAS BEEN DELETED!!!")
    

}

deletebtn.addEventListener("click", function(){
    deleteCoffeeOrder()
    getAllCoffeeOrders()
})