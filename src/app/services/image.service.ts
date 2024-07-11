import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from '../../environment/environment';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = environment.urlApi + 'images';
  private imageIdSource = new Subject<number>();
  public imageId$ = this.imageIdSource.asObservable();

  constructor(private http: HttpClient) { }

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
    return this.http.get<Image[]>(`${this.apiUrl}/news/${newsId}`).pipe(
      tap(images => console.log('Images:', images))
    );
  }

  setImageId(id: number): void {
    this.imageIdSource.next(id);
  }
}
