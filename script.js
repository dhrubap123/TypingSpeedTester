const typingTestSentences = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with one step.",
    "Success is not final, failure is not fatal.",
    "The best time to plant a tree is now.",
    "Everything you want is on the other side of fear.",
    "Success comes to those who are too busy to look.",
    "Do not watch the clock; do what it does.",
    "Opportunities do not happen. You create them.",
    "Hard work beats talent when talent does not work hard.",
    "The future belongs to those who believe in dreams.",
    "It does not matter how slowly you go.",
    "Creativity is intelligence having fun.",
    "Develop success from failures.",
    "Do not let what you cannot do interfere.",
    "You learn more from failure than from success.",
    "Every moment is a fresh beginning.",
    "Happiness is an inside job.",
    "Be so good they cannot ignore you.",
    "The only limit to our realization is doubt.",
    "Success is the sum of small efforts.",
    "Dream big and dare to fail.",
    "Inspiration exists, but it must find you working.",
    "Stay hungry, stay foolish.",
    "The harder I work, the luckier I get.",
    "Do what you love, love what you do.",
    "Life is too short to wait.",
    "The power of imagination makes us infinite.",
    "Dream as if you will live forever.",
    "Success is the progressive realization of a goal.",
    "You are stronger than you think.",
    "Live each day as if your last.",
    "Action is the foundational key to success.",
    "Turn your wounds into wisdom.",
    "If you can dream it, you can do it.",
    "Life is short, make it sweet.",
    "Everything you can imagine is real.",
    "What we think, we become.",
    "The secret to getting ahead is starting.",
    "You miss 100% of the shots you do not take.",
    "Change the world by being yourself.",
    "Try to be a rainbow in someone's cloud.",
    "It is never too late to be what you might have been.",
    "Believe you can and you are halfway there.",
    "A winner is a dreamer who never gives up.",
    "Success is not in what you have.",
    "It always seems impossible until it is done.",
    "You are never too old to set a new goal.",
    "What lies before us are tiny matters.",
    "Keep on going, and you will stumble on something.",
    "Live for each second without hesitation.",
    "The best way out is always through.",
    "Start where you are. Use what you have.",
    "I can, therefore I am.",
    "To be the best, you must be able to handle the worst.",
    "Do something today that your future self will thank you for.",
    "It does not matter how slowly you go as long as you do not stop.",
    "In order to write about life first you must live it.",
    "The best revenge is massive success.",
    "Do not wait for opportunity. Create it.",
    "What we think, we become.",
    "The purpose of our lives is to be happy.",
    "What you do today can improve all your tomorrows.",
    "Life is what happens when you are busy making other plans.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "Life is not about finding yourself. Life is about creating yourself.",
    "Life is really simple, but we insist on making it complicated.",
    "Do not wait. The time will never be just right.",
    "The secret of getting ahead is getting started.",
    "In the end, we only regret the chances we did not take.",
    "What we do in life echoes in eternity.",
    "Your time is limited, so do not waste it living someone else's life.",
    "Life is what happens when you are busy making other plans.",
    "The only way to do great work is to love what you do.",
    "Keep going, keep growing.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Life is short, and it is up to you to make it sweet.",
    "The best way to predict the future is to create it.",
    "Do what you can, with what you have, where you are.",
    "To be the best, you must be able to handle the worst.",
    "If you want to fly, give up everything that weighs you down.",
    "In the middle of difficulty lies opportunity.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "Do not let what you cannot do interfere with what you can do.",
    "The best time to plant a tree was twenty years ago. The second best time is now.",
    "Everything you have ever wanted is on the other side of fear.",
    "It is not whether you get knocked down, it is whether you get up.",
    "People who are crazy enough to think they can change the world are the ones who do.",
    "Failure will never overtake me if my determination to succeed is strong enough.",
    "Knowing is not enough; we must apply. Wishing is not enough; we must do.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Creativity is intelligence having fun.",
    "Do not let yesterday take up too much of today."
];



document.querySelector("#origin-text p").innerHTML = typingTestSentences[Math.floor(Math.random() * typingTestSentences.length)];


const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const resetButton = document.querySelector("#reset");
const originText = document.querySelector("#origin-text p").innerHTML;
const theTimer = document.querySelector(".timer");


document.getElementById("test-area").disabled = false;
let time = [0,0,0,0];
let typedText = "";
let timeIntervalStart = false;
let timeInterValStartStop;
let textTypedLen = "";



// Add leading zero to numbers 9 or below (purely for aesthetics):
let addZero = (val)=>{
    if(val<=9){
        val = "0"+val;
    }
    return val;
}

// Run a standard minute/second/hundredths timer:
let timerUpdate = ()=>{
    time[3]++;
    time[2] = Math.floor((time[3])%100);
    time[1] = Math.floor(((time[3]/100))%60);
    time[0] = Math.floor(((time[3]/100)/60)%60);
    theTimer.innerHTML = addZero(time[0]) + ":" + addZero(time[1]) + ":" + addZero(time[2]);
}

// Match the text entered with the provided text on the page:
let textMatch = (e)=>{
    let typedText = testArea.value;
    // console.log(typedText);
    let checkTypedText = originText.substring(0,typedText.length);

    if(typedText == checkTypedText){
        // console.log("hello");
        if(typedText.length == originText.length){
            clearInterval(timeInterValStartStop);
            timeIntervalStart = false;
            testWrapper.style.borderColor = "green";
            document.getElementById("test-area").disabled = true;
        }else{
            testWrapper.style.borderColor = "blue";
        }
    }else{
        testWrapper.style.borderColor = "red";
    }

}


// Start the timer:
let timerStart = (e)=>{
    textTypedLen += testArea.value;
    console.log(textTypedLen.length);
    console.log(e)

    if(textTypedLen.length == 0 && !(e.keyCode <= 65 || e.keyCode >= 90)){
        timeIntervalStart = true;
        timeInterValStartStop = setInterval(()=>{
            if(timeIntervalStart){
                timerUpdate();
            }
        },10)
    }
}


// Reset everything:
let reset = ()=>{
    clearInterval(timeInterValStartStop);
    timeIntervalStart = false;
    textTypedLen = "";
    document.getElementById("test-area").disabled = false;
    testArea.value = "";
    time = [0,0,0,0];
    typedText = "";
    testWrapper.style.borderColor = "#D4BDAC";
    theTimer.innerHTML = "00:00:00";
}



// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keydown", timerStart, false);
testArea.addEventListener("keyup", textMatch, false);
resetButton.addEventListener("click", reset);
newSes.addEventListener("click", ()=>{
    location.reload();
})