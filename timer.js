const countdownbtn = document.getElementById("countdown")
let timerinput = document.getElementById("timerinput")
const timerheading = document.getElementById("timerheading")


countdownbtn.addEventListener("click",function(){
    let countdown = timerinput.value
    let intervalId = window.setInterval(function() {
        if(countdown >= 0) {
            timerheading.innerHTML = countdown
        }else{
            window.clearInterval(intervalId)
        }

        countdown-=1    
    }, 1000)
})



