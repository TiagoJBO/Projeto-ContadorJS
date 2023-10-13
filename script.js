
const startButton = document.getElementById("start")
const stopButton = document.getElementById("stop")
const resetButton = document.getElementById("reset")


const value = document.getElementById("value")

const UpdateValue = () => {
    value.innerHTML = number;
}
let number = 0;
let intervalId

function start() {
    intervalId = setInterval(function () {
        number++
        value.innerHTML = number
    }, 1000)
}


resetButton.addEventListener("click", () => {
    number = 0;
    UpdateValue();
});

function stop() {
    clearInterval(intervalId)
}
