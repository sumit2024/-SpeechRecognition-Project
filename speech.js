

let button = document.querySelector('button')


button.addEventListener("click",(e) => {
    window.SpeechRecognition = 
 window.SpeechRecognition || window.webkitSpeechRecognition;

 let  recognition =new SpeechRecognition()
 recognition.interimResults = true;


 let p = document.createElement("p")
 let words = document.querySelector(".words")
 words.appendChild(p);


recognition.addEventListener("result",(e) => {
    button.innerHTML =  " loading"
    let transcript = Array.from(e.results)
    .map((result) =>  result[0])
    .map((result) => result.transcript)
    .join("")
    p.textContent = transcript;

    
        if(e.result[0].isFinal){
        p = document.createElement("p")
        words.appendChild(p)
    } else {
        console.log(transcript);
    }
})
recognition.addEventListener("end",recognition.start)

recognition.start()
});