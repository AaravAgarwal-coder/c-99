var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textarea").innerHTML= "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
    speak();
    
    document.getElementById("textarea").innerHTML = "Content";

}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textarea").value;
    
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
}

Webcam.set({

    width: 320,
    height: 320,
    image_format = "png",
    png_quality = 90

});

camera = document.getElementById("camera");



