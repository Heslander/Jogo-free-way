// CÓDIGOS DO ATOR

// Variáveis do ator

let xAtor = 85;
let yAtor = 366;
let larguraAtor = 30;
let comprimentoAtor = 30;
let colisao = false; 
let meusPontos = 0;
let textoMeusPontos = "Pontos:";
let textoVidas = "Vidas:";
let vidas = 5;
let ident;



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

function incluiPontos (){
  fill(255, 240, 60);
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width/4.6, 27);
  fill(55, 100, 0);
  text (textoMeusPontos, width/10, 26);
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    posicaoInicialAtor();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0; 
}

function podeSeMover(){
  return yAtor < 366;
}

function podeSeMoverParaOsLadosEsquerdo (){
  return xAtor > 0
}

function podeSeMoverParaOsLadosDireito (){
  return xAtor < 475
}

function contaVidas (){
  fill(255, 240, 60);
  textAlign(CENTER);
  textSize(25);
  text (vidas, 400, 27);
  
}

function incluirVidas (){
  fill (55, 100, 0);
  textAlign (CENTER);
  textSize (25);
  text (textoVidas, 350, 26);
}

function vidasMenorQueZero (){
   return (vidas < 0 || vidas <= 5);
}

function chamaPrompt(){
  ident = prompt ("Diga seu nome, infeliz!");
  return ident;
}

function zeroVidas (){ 
  if (vidas <=0) {
    alert ("Perdeu");
    chamaPrompt();
    return vidas = 5; 
  } 
}






  
    
  

