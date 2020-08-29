// para instalar o projeto npm install e para rodar o servidor npm start

// colocando o conteúdo dentro da IIFE - Immediately Invoked Function Expression
//num compartilha nada para fora do escopo

//import {sessionTemplate} from './template.js';

//(function () {}())

//import getSessions, {sessionTemplate, sessionURL } from './sessionRepository.js'

import getSessions, * as sessionRepository from './sessionRepository.js'

//importação  nomeada
//import {sessionTemplate as template, errorMessage} from'./template.js'

//importar tudo
//import * as template from'./template.js'

function render() {
    var list = document.querySelector('#sessions');
    if (!list) return;
    list.innerHTML = sessionRepository.sessionTemplate(data.listItems);
};


var data = {
    listItems: []
};

getSessions()
    .then((sessions) => {
        console.log('promises!')
        data.listItems = sessions;
        render();
    });


