const PROCESS_TYPES = {
    SITE: "SITE",
    SERVER: "SERVER"
}

const PROCCES_DIR = {
    SITE: `D:\\Projetos\\bek-system\\web-front\\dist\\bek-system`,
    SERVER: `D:\\Projetos\\bek-system\\backend\\dist`
}

const PROCESS_COMMAND = {
    SITE: {
        command: "node",
        args: ["server.js"]
    },
    SERVER: {
        command: "init.bat",
        args: null
    }
}

module.exports = {
    PROCESS_TYPES: PROCESS_TYPES,
    PROCCES_DIR: PROCCES_DIR,
    PROCESS_COMMAND: PROCESS_COMMAND
}