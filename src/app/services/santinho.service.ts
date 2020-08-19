import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SantinhoService {


  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(environment.api + '/santinho')
      .pipe(
        retry(1),
        catchError(this.handleError),
      );
  }

  buscarPorId(id: number) {
    return this.http.get<any>(environment.api + '/santinho/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError),
      );
  }

  excluir(id: number) {
    return this.http.delete<string>(environment.api + '/santinho/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError),
      );
  }

  cadastrar(santinho: any) {
    return this.http.post<any>(environment.api + '/santinho/', santinho)
      .pipe(
        retry(1),
        catchError(this.handleError),
      );
  }

  editar(santinho: any) {
    return this.http.put<any>(environment.api + '/santinho/' + santinho.id, santinho)
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
