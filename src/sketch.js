

function setup() {
  createCanvas(500, 400);
  //somDaTrilha.loop();
  
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosiçãoInicial();
  verificaColisao();
  incluiPontos();
  marcaPontos();
  incluirVidas ();
  contaVidas ();
  zeroVidas();
  //ranking();
  recorde ();

}

// Funções





