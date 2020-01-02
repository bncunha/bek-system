export class DefaultResponse {
    data: any;
    hasError: boolean;
    message: string;
    status: number

    constructor() {

    }

    error(message: string, data?: any, status?: number): DefaultResponse {
        this.message = message;
        this.hasError = true;
        this.data = data;
        this.status = status;
        return this;        
    } 

    success(message: string, data?: any): DefaultResponse {
        this.message = message;
        this.hasError = false;
        this.data = data;
        return this;        
    }
}