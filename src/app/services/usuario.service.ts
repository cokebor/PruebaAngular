import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL="http://localhost:3000/usuario"
  constructor(private http:HttpClient) {} 
  public agregar(usuario: UsuarioModel): Observable<any>{
    return this.http.post(this.URL, usuario);
  }
    public Login(usuario: UsuarioModel):Observable<UsuarioModel[]> {
        
        return this.http.get<UsuarioModel[]>(this.URL);/*.subscribe(dato=>{
          for (let index = 0; index < dato.length; index++) {
            if(dato[index].email==usuario.email && dato[index].pass==usuario.pass){
              us=dato[index];
            }
          }
      })
      return us;*/
    }
    
    
}
