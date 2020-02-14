import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: "root"
})
export class CommentsService {
  constructor(private http_: HttpClient) {}

  getProducts() {
    // debugger;
    return this.http_
      .get(environment.endpoint)
      .pipe(catchError(this.handleError));
  }
  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log("some thing went worng!");
    return throwError(errorMessage);
  }
}
