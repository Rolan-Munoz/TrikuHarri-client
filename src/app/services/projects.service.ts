import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Category } from '../models/category';
import { Project } from '../models/project';
import { Servicio } from '../models/servicio';

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

  getAllProjectsByService(id: number): Observable<Project[]> {
    return this.http.get<Project[]>(`${environment.urlApi}services/${id}/projects`);
  }

  saveProject(project: Omit<Project, 'id'>): Observable<Project> {
    return this.http.post<Project>(`${this.apiUrl}/save`, project);
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}/${project.id}/update`, project);
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}/remove`);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.urlApi}categories/all`);
  }

  getAllServices(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(`${environment.urlApi}services/all`);
  }
}
