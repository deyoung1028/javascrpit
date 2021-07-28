const submitButton = document.getElementById("submitButton")
const imagesUL = document.getElementById("imageUL")

submitButton.addEventListener("click", function(){
    const url = imageTextBox.value

    const liItem = document.createElement("li")
    const img = document.createElement("img")

    liItem.appendChild(img)

    imagesUL.appendChild(liItem)

})