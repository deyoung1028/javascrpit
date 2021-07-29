const newsUL = document.getElementById("newsUL")
let newsItems = news.articles

window.addEventListener("load", function(){
     newsItems.map(function(newsItems){
       
        let item = `
        <li> 
        <img src = "${newsItems.urlToImage}"/>
            <h1>${newsItems.title}</h1>
            <h2>${newsItems.description}</h2>
            <h3>${newsItems.url}</h3>
            <h4>${newsItems.author}</h4>
            <h4>${newsItems.publishedAt}</h4>

        </li>
        
           
        `
        newsUL.insertAdjacentHTML("beforeend",item)
    })

})






