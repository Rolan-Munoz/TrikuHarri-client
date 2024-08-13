import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-upload-images',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './upload-images.component.html',
  styleUrl: './upload-images.component.css'
})
export class UploadImagesComponent {

  @Input() entityId!: number;
  @Input() entityType!: 'news' | 'project';
  imageForm: FormGroup;
  imageUrls: string[] = []; // Array para almacenar las URLs de las imágenes

  constructor(private formBuilder: FormBuilder, private imageService: ImageService, private router: Router) {
    this.imageForm = this.formBuilder.group({
      imageIds: this.formBuilder.array([], [Validators.required])
    });
  }

  get imageIds(): FormArray {
    return this.imageForm.get('imageIds') as FormArray;
  }

  addImage(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const image = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrls.push(reader.result as string); // Almacena la URL de la imagen
      };
      reader.readAsDataURL(image);

      if (this.entityType === 'news') {
        this.imageService.uploadImageToNews(this.entityId, image).subscribe(imageId => {
          this.imageIds.push(this.formBuilder.control(imageId));
        });
      } else if (this.entityType === 'project') {
        this.imageService.uploadImageToProject(this.entityId, image).subscribe(imageId => {
          this.imageIds.push(this.formBuilder.control(imageId));
        });
      }
    }
  }

  navigate() {
    this.router.navigateByUrl('/admin/dashboard');
  }

}
