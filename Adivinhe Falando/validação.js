
const boxResultRecord= document.getElementById('record_container_box_id')

exibirRecord();
function verificaSeOChutePossuiUmValorValido(chute){
const numero= +chute;
 if(chuteForValido(numero) ){
    elementoChute.innerHTML +="<div> Valor Inválido </div>";
    
}

else if(numeroForMaiorOuMenorQueOvalorPermitido(numero)){
  elementoChute.innerHTML+=`<div>Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor}</div> ` 
  tentativas++;
}

else if(acertou(chute)){
   
    const resultado= localStorage.getItem('record');
    const record= tentativas+1;
    document.body.innerHTML=`<h2>Parbéns Voçe Acertou!</h2>
                        <h3>O Numero Secreto era ${numeroSecreto}.</h3>  
                     
       
                        <section class="container_tent">
                        <p class="container_tent_paragraf" >tentativas</p>
                        <div class="container_tent_box" id="Box-tentativas">
                          <span id="tentativas"  class="container_tent_box_paragraf" > ${tentativas+1}</span>
                        
                        </div>
                    </section>             
                        <button  id="jogar-novamente" class ="button">Jogar Novamente</button>`
            
          
          if(localStorage.getItem('record') ){
            if (record<resultado){
            localStorage.setItem('record',record);}
            }
                else{
                    localStorage.setItem('record',tentativas+1);
                }
            

                    }



else if(verficaAondeONumeroEstarDentroDoIntervaloPermitido(chute)){
if(chute > numeroSecreto){
    elementoChute.innerHTML+=`   <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div> 
    ` 
    
    tentativas++;
}else{
    elementoChute.innerHTML+=`   <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div> `       
   tentativas++;
}



}
boxTentativas.innerHTML=`
${tentativas}
`






}






function chuteForValido(numero){
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOvalorPermitido(numero){
    return numero > maiorValor || numero<menorValor;

}

function acertou(chute){
return numeroSecreto==chute;
}

function verficaAondeONumeroEstarDentroDoIntervaloPermitido(chute){
   return chute > numeroSecreto ||  chute < numeroSecreto

    

}


document.body.addEventListener('click', (e)=>{
    if(e.target.id=='jogar-novamente'){
        window.location.reload();
        tentativas++;
        exibirRecord();
    }
    
    })

function SalvarRecord(recorde){
localStorage.setItem('Recorde',recorde);
}

function exibirRecord(){
  const resultado= localStorage.getItem('record');
    boxResultRecord.textContent=resultado;

}