// CÓDIGOS DO CARRO

// Variáveis do carro

// Lista

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let larguraCarros = [40, 40, 40, 40, 40, 40];
let comprimentoCarros = [ 65, 65, 65, 65, 65, 65];
let velocidadeCarros = [4, 9, 6, 5, 6, 8];

// carro 1
//let xCarro1 = 600;
//let yCarro1 = 40;
//let larguraCarro = 40;
//let comprimentoCarro = 65;
//let velocidadeCarro1 = 3;

// carro2
//let xCarro2 = 600;
//let yCarro2 = 96;
//let larguraCarro2 = 40;
//let comprimentoCarro2 = 65;
//let velocidadeCarro2 = 5;

// carro 3
//let xCarro3 = 600;
//let yCarro3 = 150;
//let larguraCarro3 = 40;
//let comprimentoCarro3 = 65;
//let velocidadeCarro3 = 6;

// Funções do carro

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros[i], larguraCarros[i]);

  }  
} 

function movimentaCarro(){
  for ( let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosiçãoInicial(){
  for ( let i = 0; i < imagemCarros.length; i++){
    if (passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}  

function passouTodaTela(xCarro){
  return xCarro < - 70; //comprimentoCarros[i];
}
