// CÓDIGOS DO ATOR

// Variáveis do ator

let xAtor = 85;
let yAtor = 366;
let larguraAtor = 30;
let comprimentoAtor = 30;
let colisao = false; 
var teclaCima = document.getElementById('cima');
var teclaBaixo = document.getElementById('baixo');
var podeSeMoverParaCima = false;
var podeSeMoverParaBaixo = false;



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
  

/*teclaCima.onclick = function(){
  if(podeSeMover){
    yAtor -= 3;
  }
}
    
teclaBaixo.onclick = function(){
  if(podeSeMover()){
    yAtor += 3;
  }
} */

teclaCima.addEventListener('touchstart', function(){
  podeSeMoverParaCima = true;
  moverParaCima();
});

teclaCima.addEventListener('touchend', function(){
  podeSeMoverParaCima = false;
});

function moverParaCima(){
  if (podeSeMoverParaCima){
    yAtor -= 3;
    requestAnimationFrame(moverParaCima);
  }
}

teclaBaixo.addEventListener('touchstar', function(){
  podeSeMoverParaBaixo = true;
  moverParaBaixo();
});

teclaBaixo.addEventListener('touchend', function(){
  podeSeMoverParaBaixo = false;
});

function moverParaBaixo(){
  if (podeSeMoverParaBaixo && yAtor < 366){
    yAtor += 3;
    requestAnimationFrame(moverParaBaixo);
  }
}


