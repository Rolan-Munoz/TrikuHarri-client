import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Image } from '../../../models/image';
import { ImageService } from '../../../services/image.service';
@Component({
  selector: 'app-images',
  standalone: true,
  imports: [],
  templateUrl: './images.component.html',
  styleUrl: './images.component.css'
})
export class ImagesComponent implements OnInit {
  @Input() projectId?: number;
  @Input() onlyFirstImage? = false;
  @Output() backgroundImageUrl = new EventEmitter<string>(); // Nuevo EventEmitter
  images: Image[] = [];


  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    if (this.projectId) {
      this.imageService.getImagesByProjectId(this.projectId).subscribe(
        (images: Image[]) => {
          console.log('Imágenes cargadas:', images); // Agrega esta línea
          this.images = images;
          if (this.onlyFirstImage && images && images.length > 0) { // Asegúrate de que images no es null
            // Emite la URL de la primera imagen
            this.backgroundImageUrl.emit('data:image/jpeg;base64,' + images[0].image);
          }
        },
        error => {
          console.error('Error al obtener las imágenes:', error);
        }
      );
    } else {
      console.error('projectId no es válido');
    }
}


  
}

