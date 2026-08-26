import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

private urlApi:string ="http://localhost:3000/proyectos";

  constructor(private http:HttpClient)
  {

  }

obtenerProyectos():Observable<any>
{
  return this.http.get(this.urlApi);
}

crearProyecto(proyecto:any):Observable<any>
{
  return this.http.post(this.urlApi, proyecto);
}

obtenerProyectoPorId(id:string):Observable<any>
{
  return this.http.get(this.urlApi + '/' + id);
}

actualizarProyecto(id:string, proyecto:any):Observable<any>
{
  return this.http.put(this.urlApi + '/' + id, proyecto);
}

eliminarProyecto(id:string):Observable<any>
{
  return this.http.delete(this.urlApi + '/' + id);
}
}