console.log (this)

const submitButton = document.getElementById("submitButton")
const nameTextBox = document.getElementById("nameTextBox")
const ageTextBox = document.getElementById("ageTextBox")
const nameHeading = document.getElementById("nameHeading")
const namesUL = document.getElementById("namesUL")

document.get

submitButton.addEventListener("click", function() {
    //get the value of the text box
    const name = nameTextBox.value
    // get the value from the age text box
    const age = ageTextBox.value
    //assign the value from the text box to h1
    nameHeading.innerHTML = name + " " + age
    // create a name li
    const nameLI = document.createElement("li")
    nameLI.innerHTML = name
    const removeButton = document.createElement("button")

    removeButton.addEventListener("click", function(){
        //this = remove button
        //this.parentElement = LI
        //this.parentElement.parentElement = UL
        namesUL.removeChild(this.parentElement)
        // console.log(this.parentElement)
    })
    removeButton.innerHTML = "Remove"
    nameLI.appendChild(removeButton)
    // append name LI to namesUL
    namesUL.appendChild(nameLI)

    // // add a div element to the body

    // const divElement = document.createElement("div")
    // // add div element to the body
    // document.body.appendChild(divElement)
})

