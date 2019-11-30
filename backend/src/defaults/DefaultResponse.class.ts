import { HttpException } from "@nestjs/common";


export class DefaultResponse {
    data: any;
    status: number;
    message: string;

    constructor() {
    }

    ok(data, message = 'Sucesso!') {
        this.message = message;
        this.data = data;
        this.status = 200;
        return this;
    }
    
    error(data, message = 'Erro na operação') {
        const response = new DefaultResponse();
        response.data = data.toString();
        response.message = message;
        response.status = 500;
        throw new HttpException(response, 500);
    }


}