let display = document.getElementById("display");
let currentExpression = "";

function appendToDisplay(value) {
    currentExpression += value;
    display.value = currentExpression;
    // console.log("display value:"+display.value);
    // console.log(currentExpression);
}

function clearDisplay() {
    currentExpression = "";
    display.value = "";
}
function math_sqrt(){
    let result = Math.sqrt(currentExpression);
    display.value = result;
    currentExpression = result;
}
function calculateResult() {
    try {
        let result = eval(currentExpression);
        // console.log("ans" + result);
        display.value = result;
        currentExpression = result.toString();
    } catch (error) {
        display.value = "Error";
    }
}
function playAudio() {
    const audioPlayer = document.getElementById('audioPlayer');
    
    // Check if the audio is already playing, if so, pause and reset it
    if (!audioPlayer.paused) {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
    }
    
    // Play the audio
    audioPlayer.play();
  }
  
  
  
