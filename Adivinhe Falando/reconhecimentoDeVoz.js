const boxTentativas= document.getElementById('tentativas');
var tentativas=0;

const elementoChute = document.getElementById('chute');
window.SpeechRecognition =window.SpeechRecognition || window.webkitSpeechRecognition;


const recognition = new SpeechRecognition();
recognition.lang='pt-br';
recognition.start()

recognition.addEventListener('result',onSpeack);

function onSpeack(e){
chute= e.results[0][0].transcript;

exibeChuteNaTela(chute);
verificaSeOChutePossuiUmValorValido(chute);


}

function exibeChuteNaTela(chute){

 const elementoChute = document.getElementById('chute');

    elementoChute.innerHTML=`
<div> Você Disse</div>
<span class="box"> ${chute} </span>
`




}
recognition.addEventListener('end', () =>{
    recognition.start();
  
})

