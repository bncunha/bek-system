const processos = require('./gerenciar-processos')

function escutarProcessos(window) {
    processos["SITE"].stdout.on('data', (data => {
      console.log(data.toString());
      sendMessage("site-message", data.toString(), window)
    }));
    
    processos["SERVER"].stdout.on('data', (data => {
      console.log(data.toString());
      sendMessage("server-message", data.toString(), window)
    }));
}

function sendMessage(idEvent, message, window) {
  window.webContents.send(idEvent, message)
}

module.exports = { escutarProcessos :escutarProcessos };