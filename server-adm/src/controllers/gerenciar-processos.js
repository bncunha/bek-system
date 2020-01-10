const Processo = require('../classes/processo');
const { PROCCES_DIR, PROCESS_COMMAND } = require('../constants/PROCESS_CONST');

let processos = [];
let site = new Processo("SITE");
let server = new Processo("SERVER");
processos["SITE"] = (site.iniciarProcesso(PROCCES_DIR.SITE, PROCESS_COMMAND.SITE));
processos["SERVER"] = (server.iniciarProcesso(PROCCES_DIR.SERVER, PROCESS_COMMAND.SERVER));

module.exports = processos;