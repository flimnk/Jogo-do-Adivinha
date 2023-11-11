
const menorValor =1;
const maiorValor=1000;
const numeroSecreto=gerarNumeroAleatorio();
const elementoMaiorNum=document.getElementById('maior-valor')
const elementoMenorNum=document.getElementById('menor-valor');



function gerarNumeroAleatorio (){

return parseInt(Math.random()*maiorValor+1);
}
console.log(numeroSecreto);



elementoMaiorNum.innerHTML=maiorValor;
elementoMenorNum.innerHTML=menorValor;

