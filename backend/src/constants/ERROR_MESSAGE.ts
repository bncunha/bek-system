export class ERROR_MESSAGE {
    static ERROR_FOREIGN_KEY = 'Este item está vinculado a outro!';


    static getErrorMsg(numero: number) {
        switch(numero) {
            case 1451: return ERROR_MESSAGE.ERROR_FOREIGN_KEY;
            default: 'Erro interno do servidor!';
        }
    }
}