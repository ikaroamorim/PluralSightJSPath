const sessionURL = 'sessions.json';

let sessionsList = [];

// Com o export default podemos importar com qualquer nome  import anyName from './sessionRepository.js';
 function getSessions() {
    return new Promise(function (resolve, reject) {
        var oReq = new XMLHttpRequest();
        oReq.onload = function (e) {
            sessionsList = e.target.response;
            resolve(sessionsList);
        };
        oReq.open('GET', 'sessions.json', true);
        oReq.responseType = 'json';
        oReq.send();
    })
}

//podemos renomear os modulos na exportação export {getSessions as sessions}
//esportando as default temo conseguimos exporta default tammbém
export {getSessions as default, sessionURL};

//podemos exportar o sessionTemplate daqui também 
export {sessionTemplate} from './template.js'