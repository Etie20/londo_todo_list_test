import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Response} from "../../core/dtos/response/Response";
import {Task} from "../../core/models/Task";
import {environment} from "../../environment/environment";
import {CreateTaskRequest} from "../../core/dtos/request/CreateTaskRequest";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiUrl = environment.apiUrl + '/task'
  constructor(private http: HttpClient) {}

  findAllTasks(): Observable<Response<Task[]>> {
    return this.http.get<Response<Task[]>>(`${this.apiUrl}`)
  }

  createTask(createTaskRequest: CreateTaskRequest): Observable<Response<Task>> {
    return this.http.post<Response<Task>>(`${this.apiUrl}`, createTaskRequest)
  }

  deleteTask(taskId: string): Observable<unknown> {
    return this.http.delete(`${this.apiUrl}/${taskId}`);
  }

  updateTask(taskId:string, updateTaskRequest: CreateTaskRequest): Observable<Response<Task>> {
    return this.http.put<Response<Task>>(`${this.apiUrl}/${taskId}`, updateTaskRequest);
  }

}
