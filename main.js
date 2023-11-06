function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play():
}
const listadeTeclas = document.querySelectorALL(".tecla");

let contador = 0;
while(contador < listadeTeclas.lenght){
   const efeito = listadeTeclas[contador].onclick = function (){
    tocaSom(idAudio)
   }
   contador = + 1;
}