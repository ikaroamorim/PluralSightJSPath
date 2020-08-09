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


