const newsstories = document.getElementById("newsstories")

async function getAllIds(){

const idURL = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"

let response = await fetch(idURL)
let storyIdArray = await response.json()
console.log(storyIdArray)
getArticles(storyIdArray)

}
getAllIds()

function getArticles(storyIdArray){
    let articleInfo = storyIdArray.map(async function(article){
        let response2 = await fetch (`https://hacker-news.firebaseio.com/v0/item/${article}.json?print=pretty`)
        .then(function(response){
            return response.json()
        }).then(function(result){
            displayNews(result)
        })
})
}
function displayNews(newsInformation){
    let storyInfo = `
    <h3>${newsInformation.title}</h3>
    <h4>${newsInformation.by}</h4>
    <h4>${newsInformation.url}</h4>
    <h4>${newsInformation.time}</h4>
    `
newsstories.insertAdjacentHTML("beforeend", storyInfo)
}
