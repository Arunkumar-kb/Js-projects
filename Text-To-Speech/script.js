const text = document.getElementById('text');
const submitBtn = document.getElementById('submit');
const resumeBtn = document.getElementById('resume');
const pauseBtn = document.getElementById('pause');

resumeBtn.style.display = 'none';
submitBtn.addEventListener('click', ()=>{
    const audioMsg=text.value.trim();
    if(audioMsg !== ""){
        textTospeech(audioMsg);
    }
});
function textTospeech(text){
    let speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
}

resumeBtn.addEventListener('click', ()=>{
    pauseBtn.style.display = 'block';
    resumeBtn.style.display = 'none';

    if(speechSynthesis.pause) speechSynthesis.resume();
});

pauseBtn.addEventListener('click', ()=>{
    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'block';

    speechSynthesis.speaking ? speechSynthesis.pause() : "";
});