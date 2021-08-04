const GET_ALL_ORDERS_URL = ("https://troubled-peaceful-hell.glitch.me/orders")

function getAllCoffeeOrders(orderssubmitted) {
    fetch(GET_ALL_ORDERS_URL)
        .then(response => {
            return response.json()
        }).then(result => {
            orderssubmitted(result)
        }).catch((error) => {
            console.log(console.error)
        })

}

getAllCoffeeOrders((orders) => {
    console.log(orders)
})
fetch(GET_ALL_ORDERS_URL)
    .then(response => {
        return response.json()
    }).then((order) => {
        console.log(order)
    })


fetch('https://troubled-peaceful-hell.glitch.me/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: 'dwightshrute@gmail.com',
          type: 'Beet Juice',
          size: 'Extra Large',
          price:'2.50'
        })
      })