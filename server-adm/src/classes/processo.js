const { spawn } = require('child_process');

class Processo {
    processRef;
    tag;
    constructor(tag) {
        this.tag = tag;
    }

    iniciarProcesso(diretorio, comando) {
        this.processRef = spawn(comando.command, comando.args, {cwd: diretorio});
        return this.processRef;
        // this.ativos[type].stderr.on('data', (data => { 
        //     this.ativos[type] = null;
        //     console.log(data.toString()) 
        // }));
    }

    matarProcesso(type) {
        this.processRef.kill();
        this.processRef = null;
    }
}

module.exports = Processo;