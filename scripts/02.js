'use strict';

function fillBox(el, txt) {
    let element = document.getElementById(el)
    element.innerText = txt
}

//Use of switch
// ele usa ===
function simpleSwitch() {
    let opt = document.getElementById('optionswitch').value;

    switch (opt) {
        case '1':
            console.log('Produto 1')
            break
        case '2':
            console.log('Produto 2')
            break
        case '3':
        case '4':
            console.log('Produto 3 ou 4')
            break
        case '5': {
            let message = "Com as chaves o caso do switch se torna um escopo, mesmo que se tivesse que delcarar para cada case"
            console.log(message)
            break
        }
        default:
            console.log('Produto desconhecido')
            break;
    }
}

function forinSample() {
    let product = {
        Id: 2020,
        nome: 'esponja',
        cor: 'verde'
    }

    for (const key in product) {
        console.log(`${key} = ${product[key]}`)
    }
}

function forofSample() {
    let _product = [
        {
            Id: 2020,
            nome: 'esponja'
        },
        {
            Id: 2021,
            nome: 'casaco'
        },
        {
            Id: 2022,
            nome: 'igreja'
        }
    ]

    for (const obj of _product) {
        console.log(JSON.stringify(obj))
    }
}

/* Math Operations */
function mathExample() {
    let sum1 = 100
    let sum2 = "200"
    let result = "sum1 =100 \n sum2 =\"200\" \n"

    result += `Somando string com número sum1 + sum2= ${sum1 + sum2}\n`
    result += `Somando sum1 + (+sum2)= ${sum1 + (+sum2)}`
    fillBox("box1", result)
}

/* Try Catch */
function trycatchExample() {
    let texto
    let result

    try {
        texto = `Linha antes da expressão \n`
        result = x / 10
        texto += `Linha depois da expressão \n`
    } catch (error) {
        throw {
            "message": "Error in division",
            "name": "Custom Error"
        }
        texto += `No bloco catch ${error.message} \n`
    } finally {
        texto += `No bloco finally \n`
        fillBox("box2", texto)
    }
}

/* Constructor */
function constructorExample() {
    let product = {
        id: 1,
        name: 'Car'
    };
    let sampleDate = new Date();
    let sampleValue = new String();
    let text = "";

    text += `object => ${product.constructor.toString()} \n`;
    text += `date => ${sampleDate.constructor.toString()} \n`;
    text += `string => ${sampleValue.constructor.toString()} \n`;

    //Helper Functions
    text += `\nHelper Functions \n`;
    text += `Product is Array => ${isArray(product)} \n`;
    text += `sampleDate is Date => ${isDate(sampleDate)} \n`;
    text += `text is Null or Undefined => ${isNullOrUndefined(text)} \n`;

    //Instance Of
    text += `\nInstance Of \n`;
    text += `Product is instance of object => ${ (product instanceof Object).toString()} \n`;
    text += `Product is instance of string => ${ product instanceof String } \n`;




    function isArray(value) {
        return value.constructor.toString().indexOf("Array") > -1;
    }

    function isDate(value) {
        return value.constructor.toString().indexOf("Date") > -1;
    }

    function isNullOrUndefined(value) {
        return value === null || value === undefined;
    }

    fillBox("box3", text);
}

/* use of This */
function eventHandler(ctl){
    fillBox("box4", ctl);
}

/* use of call and apply */ 
function callApply(){
    let text = ''
    let prod1 = {
        name : 'ball',
        price: 10.00,
        discount: 0.1,
        finalValue: function(){
            return this.price*(1-this.discount)
        }
    }

    let prod2 = {
        name : 'doll',
        price : 25.50,
        discount: 0.2
    }

    text += `Prod1 calling Prod1 => ${ prod1.finalValue.call(prod1)} \n`;
    text += `Prod1 calling Prod2 => ${ prod1.finalValue.call(prod2)} \n`;

    text += `Prod1 applying Prod1 => ${ prod1.finalValue.apply(prod1)} \n`;
    text += `Prod1 applying Prod2 => ${ prod1.finalValue.apply(prod2)} \n`;

    fillBox("box5", text);

}

/* Spread Operator */
function spreader(){
    let exampleText = 'Example to be tested'
    let values = [...exampleText]
    fillBox("box6", values);

    //copy of array
    let arr1 = [1,2,3]
    let arr2 = [...arr1]
    console.log(arr2)

    //Attention to objects they're copied by reference if you're copying a array of objects
    
    // concatenating arrays
    let arr3 = [...arr1,...arr2]
    console.log(arr3)

    // Spread in constructors
    let dt = new Date(2020, 8, 8)
    console.log(dt)
    let dtFields=[2020,8,7]
    dt = new Date(...dtFields)
    console.log(dt)

    //Shallow Copy to copy by value a array of objects
    let prod1 = {
        name : 'ball',
        price: 10.00,
        discount: 0.1,
        finalValue: function(){
            return this.price*(1-this.discount)
        }
    }

    let prod2 = {... prod1}

    prod2.price = 25.99

    console.log(prod1.price)
    console.log(prod2.price)


}
