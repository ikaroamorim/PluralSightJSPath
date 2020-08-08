'use strict';

// parseando um float
let amount = Number.parseFloat("123.12")

changeBoxText(`O resultado do parse de Floate é ${typeof amount} ${amount} \n`)


// comparando os Floats
if(+(1.1+2.3).toFixed(2) !== 2.4){
    changeBoxText(` O resultado de operações com float teve que ser realizado dessa maneira resultando em ${+(1.1+2.3).toFixed(2)} e o mais antes da operação converte em número\n`)
}

//uso do if else javascript
let name = 'Antonio'
if(name === 'Carlos')
 changeBoxText(`Nome correto seria ${name}\n`)
else if(name === 'Hernando')
    changeBoxText(`Ainda não acertou, ${name}\n`)
else
    changeBoxText('desisto e de procurar meu nome.\n')

    
//operador ternário
let message = (10 < 5) ? 'expensive' : 'cheap'
let message2 = 10 > 5 ? 'expensive' : 'cheap'
changeBoxText(`Usando o operador ternário para ${message} ${message2}\n`)

//for loop
for(let i=0; i<5; i++){
    changeBoxText(`Uso do for ${i}\n`)
}

//while
let j = 5
while(j>0){
    changeBoxText(`Usando o While ${j}\n`)
    j--
}

//do while
j=5
do{    
    changeBoxText(`Usando o do while ${j}\n`)
    j--
}while(j>0)

/*
Functions!!
*/
function showMessage(){
    changeBoxText(`CL de uma function\n`)
}

let showMessage2 = function loggingFunction(){
    changeBoxText(`CL de uma function expression\n`)
}

function showMessage3(message){
    changeBoxText(message)
}

function showMessage4(value){
    return value*value
}
showMessage();
showMessage2();
showMessage3('CL de uma function com parametro \n')
changeBoxText(showMessage4(7) + '\n')

//alterando arquivos do html
function changeBoxText(texto){
    document.getElementById('teste1').innerText += texto;
}
changeBoxText('texto \n')
function changeBoxText2(texto){
    document.getElementById('teste2').innerText += `${texto}\n`;
}


//criando objetos
let mySymbol = Symbol()

let person = {
    primeiroNome : 'Ikaro',
    sobreNome : 'Amorim e Silva',
    idade : 32,
    [mySymbol]: 'secretInformation',
    showInfo: function(){
        changeBoxText(`Nome: ${this.primeiroNome} ${this.sobreNome} \n Idade: ${this.idade} \n `)
    }
}

person.showInfo()

function envelhece(p){
    p.idade ++
}

envelhece(person)
person.showInfo()
//podemos usar a notação a seguir para acessar as propriedades
person['idade']= 48

changeBoxText(`O objeto possui nome:${person.primeiroNome} sobrenome:${person.sobreNome} idade:${person.idade}\n`)

const el2 = document.getElementById('teste2');
let a = Math.random()*255
let b = Math.random()*255
let c = Math.random()*255
el2.style.backgroundColor = `rgb(${a},${b},${c})`

const el = document.getElementById('teste1');
el.addEventListener('click', function(){
    el.style.color = `rgb(${a},${b},${c})`
    a = Math.random()*255
    b = Math.random()*255
    c = Math.random()*255
    el.style.backgroundColor = `rgb(${a},${b},${c})`
})


/*
Arrays
*/

let values =  [1,2,3]
let values2 = Array.of(1,2,3)

changeBoxText2(values)

// checando se é array
changeBoxText2(Array.isArray(values))

// mostrando itens individualmente
changeBoxText2(`Mostrando apenas um item ${values[0]}`)

// incluindo
values2.push('d', 'e', 'f')
changeBoxText2(values2)

// removendo
values.pop()
changeBoxText2(values)

//move pra esquerda
values2.shift()
changeBoxText2(values2)

//adiciona a esquerda ou início
values2.unshift('g', 'h')
changeBoxText2(values2)

//slice
let values3 = values2.slice(1,3)
changeBoxText2(values3)

//splice
values3.splice(0,1)
changeBoxText2(values3)

//splice para inserir
values.splice(1,0, 'splice')
changeBoxText2(values)

//index of
changeBoxText2('Index da letra e no array 2 é '  +  values2.indexOf('e'))

//filter
let values4 = values2.filter(function(item){
    return item>=2
})
changeBoxText2(values4)

//find
values4 = values.find(function(item){
    return item%2!==0
})
changeBoxText2(values4)

//forEach
values2.forEach(function(item){
    changeBoxText2(`Item do array 2 \'${item}\' `)
})

//get DOM Itens
const boxes = document.getElementsByClassName('box')

console.log(boxes)

boxes[0].classList.add('adicionadaJS')