const factsUL = document.getElementById("factsUL")

let request = new XMLHttpRequest
request.open("GET", "http://api.icndb.com/jokes/random")
request.send()

request.addEventListener("load",function(){
    let response = JSON.parse(this.responseText)
    console.log(response.value.joke)

    let joke = `<h3>${response.value.joke}</h3>`
})
factsUL.innerHTML = joke
