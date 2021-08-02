const batmanmovieslist = document.getElementById("batmanmovieslist")



let request = new XMLHttpRequest()

request.addEventListener("load", function () {
    const result = JSON.parse(this.responseText)
    console.log(result.Search)

    const movieItems = result.Search.map((movie) => {
        return `<div class = "movieDiv">
         
        <img src ="${movie.Poster}"/>
        <h6 onClick = showMovieDetails("${movie.imdbID}")> ${movie.Title} </h6>
        
        </div>
        
        `

    })

    batmanmovieslist.innerHTML = movieItems.join("")
})

request.open("GET", "https://www.omdbapi.com/?s=batman&apikey=6c31af75")
request.send()


function showMovieDetails(id) {
    console.log(id)

    const selectedMovieUrl = `http://www.omdbapi.com/?i=${id}&apikey=6c31af75`
    console.log(selectedMovieUrl)
    
    let detailRequest = new XMLHttpRequest()
    detailRequest.addEventListener("load", function () {
        const result = JSON.parse(this.responseText)
        console.log(result)
    })

    detailRequest.open("GET", selectedMovieUrl)
    detailRequest.send()
}




