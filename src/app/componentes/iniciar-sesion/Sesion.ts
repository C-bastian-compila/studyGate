export class Sesion {
    public token:string;
    public correo:string;

    constructor(private token1:string, private correo1:string){
        this.token = token1;
        this.correo = correo1;
    }
}
