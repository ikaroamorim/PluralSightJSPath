'use strict'; 
(function() {

  //object literal
  let pessoa ={
    primeiroNome: 'Ikaro',
    sobrenome: 'Silva',
    adulto : function(){ return `Eh adulto: ${this.idade >= 18}`}
  }

  
  pessoa.idade = 32;
  //pessoa.adulto = function(){ return this.idade >= 18;}

  
  display(pessoa.primeiroNome)
  display(pessoa.idade)
  display(pessoa.adulto())

  //criando objetos com funções
  function criaCarro(marca, modelo){
    let carro = {
      marca,      //não precisa do this.marca= Marca
      modelo
    }
    display(carro)
  }

  criaCarro('Seat','Ibiza')

  
  //Exibindo as propriedades
  display(Object.keys(pessoa))

  display(pessoa)

  for(let propName in pessoa){
    display(propName)
  }

  let caracteristicas = {
    altura: 187,
    peso: 120
  }

  function mergeHealthStatus(person, healthStatus){
    return Object.assign({},person, healthStatus)
  }

  let  mergedPerson = mergeHealthStatus(pessoa,caracteristicas)
  display(pessoa)
  display(mergedPerson)

  // Abaixo altera o objeto original
  // Object.assign(pessoa, caracteristicas)
  // display(pessoa)

  function Empregado(id, nome){
    this.id = id;
    this.nome = nome;
  }

  let f1 = new Empregado(1,'João');

  display(f1)

})();