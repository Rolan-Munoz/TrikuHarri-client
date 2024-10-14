import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../../models/category';
import { Servicio } from '../../models/servicio';
import { ProjectsService } from '../../services/projects.service';
import { UploadImagesComponent } from "../upload-images/upload-images.component";

@Component({
  selector: 'app-form-project',
  standalone: true,
  imports: [ReactiveFormsModule, UploadImagesComponent],
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.css']
})
export class FormProjectComponent implements OnInit {

  projectForm: FormGroup;
  createdProjectId: number | null = null;
  categories: Category[] = [];
  services: Servicio[] = [];
  videoBase64: string | null = null;

  constructor(private formBuilder: FormBuilder, private projectsService: ProjectsService, private http: HttpClient, private router: Router) {
    this.projectForm = this.formBuilder.group({
      title_es: ['', [Validators.required]],
      title_en: ['', [Validators.required]],
      title_eus: ['', [Validators.required]],
      description_es: ['', [Validators.required]],
      description_en: ['', [Validators.required]],
      description_eus: ['', [Validators.required]],
      content_es: ['', [Validators.required]],
      content_en: ['', [Validators.required]],
      content_eus: ['', [Validators.required]],
      date: ['', [Validators.required]],
      client: ['', [Validators.required]],
      action: ['', [Validators.required]],
      budget: ['', [Validators.required]],
      link: [''],
      categories: this.formBuilder.array([]),
      services: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.loadCategories();
    this.loadServices();
  }

  loadCategories(): void {
    this.projectsService.getAllCategories().subscribe(categories => {
      this.categories = categories;
      this.categories.forEach(() => this.categoriesArray.push(this.formBuilder.control(false)));
    });
  }

  loadServices(): void {
    this.projectsService.getAllServices().subscribe(services => {
      this.services = services;
      this.services.forEach(() => this.servicesArray.push(this.formBuilder.control(false)));
    });
  }

  get categoriesArray(): FormArray {
    return this.projectForm.get('categories') as FormArray;
  }

  get servicesArray(): FormArray {
    return this.projectForm.get('services') as FormArray;
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = (reader.result as string).split(',')[1]; // Eliminar el prefijo
        this.videoBase64 = base64String;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.projectForm.valid) {
      const project = this.projectForm.value;
      project.categoryIds = this.categories
        .filter((_, index) => this.categoriesArray.at(index).value)
        .map(category => category.id);

      project.serviceIds = this.services
        .filter((_, index) => this.servicesArray.at(index).value)
        .map(service => service.id);

      console.log('Selected category IDs:', project.categoryIds); // Verifica los IDs de las categorías
      console.log('Selected service IDs:', project.serviceIds); // Verifica los IDs de los servicios

      if (this.videoBase64) {
        project.video = this.videoBase64;
      }

      const token = sessionStorage.getItem('authToken');
      if (token) {
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });

        this.http.post('http://localhost:8080/api/projects/save', project, { headers }).subscribe({
          next: (createdProject: any) => {
            console.log('Project created:', createdProject);
            this.createdProjectId = createdProject.id;
            this.projectForm.reset();
          },
          error: (error) => {
            console.error('Error creating project:', error);
          }
        });
      } else {
        console.error('Error: Token no encontrado');
      }
    } else {
      this.projectForm.markAllAsTouched();
      alert('Please fill all required fields');
    }
  }
}
