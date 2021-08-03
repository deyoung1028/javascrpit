const batmanmovieslist = document.getElementById("batmanmovieslist")
const movieSpecs = document.getElementById("movieSpecs")



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
    detailRequest.addEventListener("load", function() {
        const result = JSON.parse(this.responseText)
        console.log(result)

        const movieDetails = function() {
            const detailsItem =
                `
     <img src ="${result.Poster}"/>
     <h3>${result.Title}</h3>
     <h3>${result.Year}</h3>
     <h3>${result.Rated}</h3>
     <h3>${result.Released}</h3>
     <h3>${result.Director}</h3>
     <h3>${result.Runtime}</h3>
    
     `
            return detailsItem
        }
    movieSpecs.innerHTML = movieDetails()

})
    detailRequest.open("GET", selectedMovieUrl)
    detailRequest.send()

 }
