import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {Observable} from "rxjs";
import {Response} from "../../core/dtos/response/Response";
import {Base} from "../../core/models/Base";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = environment.apiUrl + '/category'
  constructor(private http: HttpClient) {}

  findAllCategories(): Observable<Response<Base[]>>{
    return this.http.get<Response<Base[]>>(this.apiUrl);
  }
}
