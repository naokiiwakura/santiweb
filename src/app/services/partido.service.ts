import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PartidoService {

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }


  listarPartidos() {
    return this.http.get<any[]>(environment.api + '/partido')
      .pipe(
        retry(1),
        catchError(this.handleError),
      );
  }

  buscarPorId(id: number) {
    return this.http.get<any>(environment.api + '/partido/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError),
      );
  }

  excluir(id: number) {
    return this.http.delete<string>(environment.api + '/partido/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError),
      );
  }

  cadastrar(partido: any) {
    return this.http.post<any>(environment.api + '/partido/', partido)
      .pipe(
        retry(1),
        catchError(this.handleError),
      );
  }

  editar(partido: any) {
    return this.http.put<any>(environment.api + '/partido/' + partido.id, partido)
      .pipe(
        retry(1),
        catchError(this.handleError),
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
