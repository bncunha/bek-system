const ipc = require('electron').ipcRenderer;

listenMessage("site-message", "siteMessage");
listenMessage("server-message", "serverMessage");

function listenMessage(listener, idToPrint) {
    ipc.on(listener, (event, args) => {
        printMessage(args, idToPrint)
    });
}

function printMessage(mensagem, idDom) {
    const br = document.createElement('br');
    console.log(document.getElementById(idDom))
    document.getElementById(idDom).append(mensagem);
    document.getElementById(idDom).appendChild(br);
}
// manager.listenProccessData(processos["SITE"], "siteMessages");
// document.getElementById(idDom).innerText(mensagem);
