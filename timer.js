
let ampm = document.getElementById("ampm")

function displayTime(){

    // -----------Time

    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = padZero(dateTime.getMinutes());
    let sec = padZero(dateTime.getSeconds());

    if(hr>12){
        hr = hr -12
        ampm.innerHTML = "PM"
    }

    // ---------Date

    let date = dateTime.getDate();
    let month = dateTime.getMonth();
    let year = dateTime.getFullYear();

document.getElementById("hours").innerHTML = padZero(hr) 
document.getElementById("mins").innerHTML = min
document.getElementById("sec").innerHTML = sec
document.getElementById("date").innerHTML = padZero(date)
document.getElementById("month").innerHTML = padZero(month)
document.getElementById("year").innerHTML = year


}

function padZero(num){
    return num<10?"0"+num:num
}



setInterval(displayTime,50)