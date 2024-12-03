import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = environment.urlApi + 'images';

  constructor(private http: HttpClient) {}

  uploadImageToNews(newsId: number, image: File): Observable<number> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post<number>(`${this.apiUrl}/news/${newsId}/save`, formData);
  }

  uploadImageToProject(projectId: number, image: File): Observable<number> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post<number>(`${this.apiUrl}/projects/${projectId}/save`, formData);
  }

  getImageById(id: number): Observable<Blob> {
    return this.http.get<Blob>(`${this.apiUrl}/${id}`);
  }

  getAllImages(): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.apiUrl}/all`);
  }

  getImagesByProjectId(projectId: number): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.apiUrl}/projects/${projectId}`);
  }

  getImagesByNewId(newsId: number): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.apiUrl}/news/${newsId}`);
  }
}
