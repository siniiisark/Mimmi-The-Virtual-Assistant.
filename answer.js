let btn = document.querySelector(".speak-button");
let content = document.querySelector("#content");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;

    btn.disabled = true;
    btn.innerText = "Mimmi is Speaking...";

    window.speechSynthesis.speak(text_speak);

    
    text_speak.onend = function () {
        btn.disabled = false;
        btn.innerText = "Click Here To Talk To Mimmi";
    };
}

function answerIng() {
    let day = new Date();
    let hours = day.getHours();

    if (hours >= 5 && hours < 12) {
        speak("Good Morning, Mimmi here, your virtual assistant, how can I help you?");
    } else if (hours >= 12 && hours < 17) {
        speak("Good Afternoon, Mimmi here, your virtual assistant, how can I help you?");
    } else if (hours >= 17 && hours < 22) {
        speak("Good Evening, Mimmi here, your virtual assistant, how can I help you?");
    } else {
        speak("Happy Midnight, Mimmi here, your virtual assistant, how can I help you?");
    }
}

window.addEventListener('load', () => {
    answerIng();
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onstart = () => {
    console.log("Speech recognition has started...");
};

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    listenMe(transcript);
    console.log(event);
};

btn.addEventListener("click", () => {
    recognition.start();
});

function listenMe(message) {
    message = message.toLowerCase();

    if (message.includes("hello, who are you")) {
        speak("Hello, Mimmi here, your virtual assistant created by mousini sarkar. How can I help you?");
    } else if (message.includes("open youtube")) {
        speak("Opening YouTube");
        window.open("https://youtube.com/", "_blank");
    } else if (message.includes("open instagram")) {
        speak("Opening Instagram");
        window.open("https://instagram.com/", "_blank");
    } else if (message.includes("open facebook")) {
        speak("Opening Facebook");
        window.open("https://facebook.com/", "_blank");
    } else if (message.includes("open linkedin")) {
        speak("Opening LinkedIn");
        window.open("https://linkedin.com/", "_blank");
    } else if (message.includes("open github")) {
        speak("Opening GitHub");
        window.open("https://github.com/", "_blank");
    } else if (message.includes("open netlify")) {
        speak("Opening Netlify");
        window.open("https://www.netlify.com/", "_blank");
    } else if (message.includes("open devfolio")) {
        speak("Opening Devfolio");
        window.open("https://devfolio.co/", "_blank");
    } else if (message.includes("open google")) {
        speak("Opening Google");
        window.open("https://google.com/", "_blank");
    } else {
        speak(`This is what I found: ${message}`);
        window.open(`https://www.google.com/search?q=${message}`);
    }
}
