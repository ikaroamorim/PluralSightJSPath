'use strict';

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
        nome:'esponja',
        cor: 'verde'
    }

    for(const key in product){
        console.log(`${key} = ${product[key]}`)
    }
}

function forofSample(){
    let _product =[
        {
            Id:2020,
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
    
    for( const obj of _product){
        console.log(JSON.stringify(obj))
    }
}
