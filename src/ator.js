// CÓDIGOS DO ATOR

// Variáveis do ator

let xAtor = 85;
let yAtor = 366;
let larguraAtor = 30;
let comprimentoAtor = 30;
let colisao = false; 
var teclaCima = document.querySelector('#cima');
var teclaBaixo = document.querySelector('#baixo');



// Funções do ator

function mostraAtor(){
  image(imagemDoAtor, xAtor,yAtor, larguraAtor, comprimentoAtor )
}
  
function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
    yAtor += 3;
    }  
  }
  if (keyIsDown(RIGHT_ARROW)){
    if (podeSeMoverParaOsLadosDireito()){
      xAtor += 1;
      }
  }
  if (keyIsDown(LEFT_ARROW)){
    if (podeSeMoverParaOsLadosEsquerdo()){
      xAtor -= 1;
      }  
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for ( let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros[i], larguraCarros[i], xAtor, yAtor, 15)
    if(colisao){
        posicaoInicialAtor();
        somDaColisao.play();
      if (pontosMaiorQueZero()){  
        meusPontos -= 1;
      } 
      if (vidasMenorQueZero()){
        vidas -=1;
      } 
    }
  }
}

function posicaoInicialAtor (){
  yAtor = 366;
  xAtor = 85;
}

function moveCima (){
    yAtor += 3;
    }


teclaCima.onclick = function(){
  if(podeSeMover){
    yAtor -= 3;
  }
}
    
teclabaixo.onclick = function(){
  if(podeSeMover){
    yAtor += 3;
  }
} 
