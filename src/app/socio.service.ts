import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocioService {
  private urlBase = "http://localhost:8080/api";
	private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
	constructor(private http: HttpClient) { }//inyectando

  createSocio(socio: Object): Observable<Object>{
    console.log(this.urlBase + "/registrar");
    return this.http.post(this.urlBase + "/registrar", socio, {headers: this.httpHeaders});
  }
}