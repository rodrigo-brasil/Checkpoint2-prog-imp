function microondas() {
  // propriedades do obj menu
  this.pipoca = 10;
  this.macarrao = 8;
  this.carne = 15;
  this.feijao = 12;
  this.brigadeiro = 8;
  //método para ligar o microondas podendo ou não passar um tempo fora do tempo padrão
  this.ligar = (prato, tempo = this[prato]) => {
    if (this.hasOwnProperty(prato)) {
      if (tempo < this[prato]) console.log("tempo insuficiente");
      else if (tempo >= this[prato] * 3) console.log("kabumm");
      else if (tempo >= this[prato] * 2) console.log("comida queimou");
      else console.log(`${prato} pronto em ${tempo}s, bom apetite!!!`);
    } else {
      console.log("Prato inexistente");
    }
  };
}

let meuMicroondas = new microondas(); //Criando um novo Microondas

//Testes
meuMicroondas.ligar("pipoca", 1); // tempo insuficiente
meuMicroondas.ligar("pipoca", 11); //pipoca pronto em 11s, bom apetite!!!
meuMicroondas.ligar("pipoca", 20);  //comida queimou
meuMicroondas.ligar("pipoca", 30); //kabumm
meuMicroondas.ligar("Arroz", 12); //Prato inexistente