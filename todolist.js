// access the button using id

const addButton = document.getElementById("addButton")
const taskTextBox = document.getElementById("taskTextBox")
const pendingUL = document.getElementById("pendingUL")
const completedUL = document.getElementById("completedUL")

addButton.addEventListener("click",function() {
    const task = taskTextBox.value 
    let listItem = document.createElement("li")
    // to add class in js to an element created in js
    listItem.setAttribute("class", "taskName") //for css
    listItem.innerHTML = task
    taskTextBox.value=""
    let removeButton = document.createElement("button")
    removeButton.setAttribute("class", "removeButton")
    removeButton.addEventListener("click", function(){
        this.parentElement.remove()

    })



    let checkbox = document.createElement("input")
    checkbox.setAttribute("type","checkbox") //for css
    checkbox.addEventListener("change", function(){
        if(this.checked){
            completedUL.appendChild(this.parentElement)
        }else { //if you uncheck it will go back to uncompleted
            pendingUL.appendChild(this.parentElement)
        }
    })
    
    listItem.appendChild(checkbox)
    listItem.appendChild(removeButton)
    pendingUL.appendChild(listItem)
    removeButton.innerHTML = "Remove"

   
  
})