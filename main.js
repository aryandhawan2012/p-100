
function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking you Selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    { 
        take_selfie(); 
        save();
    }, 5000);
}

function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri) {
        if (img_id=="selfie1") {
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }
        
        if (img_id=="selfie2") {
            document.getElementById("result2").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }

        if (img_id=="selfie3") {
            document.getElementById("result3").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }
    });
}


function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}
