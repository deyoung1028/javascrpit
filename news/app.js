const newsUL = document.getElementById("newsUL")
let newsItems = news.articles

window.addEventListener("load", function(){
     newsItems.map(function(article){
       
        let item = `
        <li> 
        <img src = "${article.urlToImage}"/>
            <h1>${article.title}</h1>
            <h2>${article.description}</h2>
            <h3>${article.url}</h3>
            <h4>${article.author}</h4>
            <h4>${article.publishedAt}</h4>

        </li>
        
           
        `
        newsUL.insertAdjacentHTML("beforeend",item)
    })

})






