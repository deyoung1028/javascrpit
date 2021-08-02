const factsUL = document.getElementById("factsUL")

let request = new XMLHttpRequest
request.open("GET", "https://island-bramble.glitch.me/dog-facts")
request.send()

request.addEventListener("load",function(){
    const fact = JSON.parse(this.responseText)


    let factItems = fact.map(function(info){
        const factItem = 
    `<li>${fact.info}</li>`
    return factItem
  


})
factsUL.innerHTML = fact
})
