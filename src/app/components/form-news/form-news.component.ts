import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { UploadImagesComponent } from "../upload-images/upload-images.component";


@Component({
  selector: 'app-form-news',
  standalone: true,
  imports: [ReactiveFormsModule, UploadImagesComponent],
  templateUrl: './form-news.component.html',
  styleUrls: ['./form-news.component.css']
})
export class FormNewsComponent {

  newForm: FormGroup;
  createdNewsId: number | null = null;

  constructor(private formBuilder: FormBuilder, private newsService: NewsService, private http: HttpClient, private router: Router) {
    this.newForm = this.formBuilder.group({
      title_es: ['', [Validators.required]],
      title_en: ['', [Validators.required]],
      title_eus: ['', [Validators.required]],
      content_es: ['', [Validators.required]],
      content_en: ['', [Validators.required]],
      content_eus: ['', [Validators.required]],
      date: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.newForm.valid) {
      const newsItem = this.newForm.value;
      console.log('Submitting news item:', newsItem); // Verifica los datos del formulario

      const token = sessionStorage.getItem('authToken');
      if (token) {
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });

        this.http.post('http://localhost:8080/api/news/save', newsItem, { headers }).subscribe({
          next: (createdNews: any) => {
            console.log('News created:', createdNews);
            this.createdNewsId = createdNews.id;
            this.newForm.reset();
          },
          error: (error) => {
            console.error('Error creating news:', error);
          }
        });
      } else {
        console.error('Error: Token no encontrado');
      }
    } else {
      this.newForm.markAllAsTouched();
      alert('Please fill all required fields');
    }
  }
}


