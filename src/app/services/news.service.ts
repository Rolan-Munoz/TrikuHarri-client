import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = environment.urlApi + 'news'; // Usa la URL de tu API desde el archivo de entorno

  constructor(private http: HttpClient) { }

  getNewsById(id: number): Observable<News> {
    return this.http.get<News>(`${this.apiUrl}/${id}`);
  }

  getAllNews(): Observable<News[]> {
    return this.http.get<News[]>(`${this.apiUrl}/all`);
  }
  

  createNew(newsItem: Omit<News, 'id'>): Observable<News> {
    return this.http.post<News>(`${this.apiUrl}/save`, newsItem);
  }
  
  
  updateNew(newsItem: News): Observable<News> {
    return this.http.put<News>(`${this.apiUrl}/${newsItem.id}/update`, newsItem);
  }

  deleteNew(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}/remove`);
  }
}
