import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl = environment.urlApi + 'images';

  constructor(private http: HttpClient) { }

  getImageById(id: number): Observable<Image> {
    return this.http.get<Image>(`${this.apiUrl}/${id}`);
  }

  getAllImages(): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.apiUrl}/all`);
  }

  getImagesByProjectId(projectId: number): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.apiUrl}/projects/${projectId}`);
  }
}


