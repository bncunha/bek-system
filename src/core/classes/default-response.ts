export class DefaultResponse {
    data: any;
    hasError: boolean;
    message: string;

    constructor() {

    }

    error(message: string, data?: any): DefaultResponse {
        this.message = message;
        this.hasError = true;
        this.data = data;
        return this;        
    } 

    success(message: string, data?: any): DefaultResponse {
        this.message = message;
        this.hasError = false;
        this.data = data;
        return this;        
    } 
}