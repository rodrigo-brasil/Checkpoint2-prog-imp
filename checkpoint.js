function microondas() {
  // propriedades do obj menu
  this.pipoca = 10;
  this.macarrao = 8;
  this.carne = 15;
  this.feijao = 12;
  this.brigadeiro = 8;
  //método para ligar o microondas podendo ou não passar um tempo fora do 
  this.ligar = (prato, tempo = this[prato]) => {
    if (this.hasOwnProperty(prato)) {
      if (tempo < this[prato]) console.log("tempo insuficiente");
      else if (tempo >= this[prato] * 3) console.log("kabumm");
      else if (tempo >= this[prato] * 2) console.log("comida queimou");
      else console.log(`${prato} pronto em ${this[prato]}s, bom apetite!!!`);
    } else {
      console.log("Prato inexistente");
    }
  };
}

let meuMicroondas = new microondas();

//Testes
meuMicroondas.ligar("pipoca", 1);