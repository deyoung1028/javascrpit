
let starters = dishes.filter((dish)=>dish.course === 'Starters')
let entrees = dishes.filter((dish)=>dish.course === 'Entrees')
let desserts = dishes.filter((dish)=>dish.course === 'Desserts')
const contentDiv = document.getElementById("contentDiv")
const starterbtn = document.getElementById("starterbtn")
const entreesbtn = document.getElementById("entreesbtn")
const dessertsbtn = document.getElementById("dessertsbtn")





starterbtn.addEventListener('click', () => {
    contentDiv.innerHTML = ""
    starters.map((dish) =>{
    const starterItems = `
   <ul id = "starters"
    <li>
        <img src = ${dish.imageURL} width=150px height=100px/>
        <h1> ${dish.title}</h1>
        <h2>${dish.description}</h2>
        <h4>${dish.price}</h4>
    </li>
    </ul>
    `
    contentDiv.insertAdjacentHTML('beforeend', starterItems)
})
})

entreesbtn.addEventListener('click', () => {
    contentDiv.innerHTML = ""
    entrees.map((dish) =>{
    const entreeItems = `
   <ul id = "entrees"
    <li>
        <img src = ${dish.imageURL} width=150px height=100px/>
        <h1> ${dish.title}</h1>
        <h2>${dish.description}</h2>
        <h4>${dish.price}</h4>
    </li>
    </ul>
    `
    contentDiv.insertAdjacentHTML('beforeend', entreeItems)
})
})

dessertsbtn.addEventListener('click', () => {
    contentDiv.innerHTML = ""
    desserts.map((dish) =>{
    const dessertItems = `
   <ul id = "desserts"
    <li>
        <img src = ${dish.imageURL} width=150px height=100px/>
        <h1> ${dish.title}</h1>
        <h2>${dish.description}</h2>
        <h4>${dish.price}</h4
        >
    </li>
    </ul>
    `
    contentDiv.insertAdjacentHTML('beforeend', dessertItems)
})
})