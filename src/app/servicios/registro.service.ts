import { Injectable } from '@angular/core';

import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegistroService {

  constructor(private http:HttpClient) { }

    guardarFormularioRegistro(email:string, clave:string):Observable<any> {
        const params = new HttpParams();
        params.set("email",email);
        params.set("clave", clave);
        return this.http.get(`${environment.hostname}:${environment.port}/api/login/${email}/${clave}`);
    }
}
