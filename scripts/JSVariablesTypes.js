'use strict';

destructing()

function fillBox(el, txt) {
    let element = document.getElementById(el)
    element.innerText = txt
}

function fillHTMLBox(el, html) {
    let element = document.getElementById(el)
    element.innerHTML = html
}


function createPassword(upper, lower, number, special){
    let result =''
    let specialChar = '@!*-.'
    let specialLenght = specialChar.length
    //Upper 65 - 90
    //Lower 97 - 122
    //Number 48 - 57

    for (let index = 0; index < upper; index++) {
        result += String.fromCharCode(65 + Math.floor((90-65+1)* Math.random()));
    }
    for (let index = 0; index < lower; index++) {
        result += String.fromCharCode(97 + Math.floor((122-97+1)* Math.random()));
    }
    for (let index = 0; index < number; index++) {
        result += String.fromCharCode(48 + Math.floor((57-48+1)* Math.random()));
    }
    for (let index = 0; index < special; index++) {
        result += specialChar.charAt(Math.floor(specialLenght*Math.random()))
    }

    fillBox('box1', result)
}

/* Template Literals */

function tempLiteral(){
    let tempLit1 = `Using template literals 
    you cand drop lines ${'R$'+ Math.floor(Math.random()*1001)}
    using \t tabulation
    using \n line break \n`
    let tempLit2 = String.raw ` 
    [using String.raw]
    Using template literals 
    you cand drop lines ${'R$'+ Math.floor(Math.random()*1001)}
    using \t tabulation
    using \n line break`

    fillBox('box2', tempLit1+tempLit2)
}

function highlightText(strings, ...values){
    let str = "";
    for(let i=0; i< strings.length; i++){
        if(i>0){
            str += `<b>${values[i-1]}</b`
        }
        str += strings[i]
    }
    return str
}

function destructing(){
    let la = {
        Factors: [true, false, true, false]
    }

    /* 
    *
    Traditional Way

    let isEmployed = la.Factors[0]
    let hasKids = la.Factors[1]
    let hasLoans = la.Factors[2]
    let hasCreditC = la.Factors[3]

    */

    let[isEmployed = false,
        hasKids,
        hasLoans,
        hasCreditC,
        ...moreArgs
    ]= la.Factors

    /* 
    Example of object destructing

    let {
        Id,
        ApplicationName
    } = la;

    */

    document.getElementById('employed').checked = isEmployed
    document.getElementById('kids').checked = hasKids
    document.getElementById('loans').checked = hasLoans
    document.getElementById('creditcards').checked = hasCreditC

}

function getProfession() {
    let val = document.getElementById('profession').value.trim().toLowerCase()
    let isStudent = val.search('student')
    //for cases that starts and ends with the desired text, can be used startsWith("") or endsWith("") that returns a boolean instead a index

    if(isStudent !== (-1)){
        fillBox('box3', 'Apply student discount')
    }
  }

  function getAge(){
    let val = document.getElementById('age').value
    let isInt = Number.isInteger(val)


    //isSafeInteger - check if the int is between limit values
    
    if(Number.isInteger(val)){
        fillBox('box4', 'You are already over 18 yo')
    }
  }