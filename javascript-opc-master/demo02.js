'use strict'; 
(function() {

  //object literal
  let pessoa ={
    primeiroNome: 'Ikaro',
    sobrenome: 'Silva',
    idade:32,
    adulto : function(){ return `Eh adulto: ${this.idade >= 18}`}
  }

  display(pessoa.primeiroNome)
  display(pessoa['primeiroNome'])

  let propertyName = 'sobrenome'
  display(pessoa[propertyName])

  //for in
  for(let propName in pessoa){
    display(`Propriedade: ${propName}, valor: ${pessoa[propName]}`)
  }


  //é possível mudar propriedades de um objeto que está writable false
  //Object.defineProperty(pessoa, 'sobrenome', {writable:false})

  //porém não é possível mudá-las ese o objeto estiver congelado
  //Object.freeze(pessoa)

  

  display(Object.getOwnPropertyDescriptor(pessoa, 'sobrenome'))


  Object.defineProperty(pessoa, 'nome',{
    get:function(){
      return `O nome é ${pessoa.primeiroNome} ${pessoa.sobrenome}. \n`
    },
    set: function(value){
      var nameParts = value.split(' ');
      this.primeiroNome = nameParts[0];
      this.sobrenome = nameParts[1];
    }
  })

  pessoa.nome = 'Ikaro Amorim';
  display(pessoa.nome)





})();