const stockQuoteHeading = document.getElementById("stockQuoteHeading")



window.setInterval(function(){
    const result = getStockQuote("GOOG")
    stockQuoteHeading.innerHTML = `${result.price}`
    console.log(result)
}, 2000)
