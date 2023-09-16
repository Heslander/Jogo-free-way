let meusPontos = 0;
let textoMeusPontos = "Pontos:";
let textoVidas = "Vidas:";
let vidas = 5;
let ident = []
let rankingList = document.getElementById("ranking__list");
let nomeJogador = [];
let li;
let maiorPonto = 0;



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
    if (ident === null){
        return "ABC";
    }
    while (ident.length < 9){
       ident += ' '; 
    }
    return ident.slice(0, 9);

  }
  
  function zeroVidas (){ 
    if (vidas <=0) {
      alert ("Perdeu");
      nomeJogador = chamaPrompt();
      if (meusPontos > maiorPonto) {
        maiorPonto = meusPontos;
      }  
      let rankingList = document.getElementById("ranking__list");
      let li = document.createElement("li");
      li.textContent = `${nomeJogador}  _______: ${maiorPonto}`;
      rankingList.appendChild(li)  ;
      vidas = 5;
      meusPontos = 0;
  
      return vidas;
  
    } 
  } 