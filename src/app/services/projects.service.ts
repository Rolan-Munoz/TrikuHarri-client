import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private apiUrl = environment.urlApi + 'projects';

  constructor(private http: HttpClient) { }

  getProjectsById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${id}`);
  }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/all`);
  }

  getAllProjectsByCategory(id: number): Observable<Project[]> {
    return this.http.get<Project[]>(`${environment.urlApi}categories/${id}/projects`);
  }
}
