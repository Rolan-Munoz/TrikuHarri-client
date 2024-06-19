import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from '../../models/image';
import { News } from '../../models/news';
import { ImageService } from '../../services/image.service';
import { LanguageServiceService } from '../../services/language-service.service';
import { NewsService } from '../../services/news.service';
import { AppTranslateModule } from "../../utils/app-translatate.module";

@Component({
    selector: 'app-news',
    standalone: true,
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css'],
    imports: [AppTranslateModule]
})
export class NewsComponent implements OnInit {

  news: News[] = [];
  images: { [key: number]: Image[] } = {};
  showModal: boolean = false;
  currentLanguage: string;

  constructor(private newsService: NewsService, private router: Router, public languageService: LanguageServiceService, private imageService: ImageService) { 
    this.currentLanguage = this.languageService.language.value;
  }

  ngOnInit(): void {
    this.showModal = true;
    this.newsService.getAllNews().subscribe((news: News[]) => {
      this.news = news.map(item => ({ ...item, expanded: false }));
      this.loadAllImages(); // Llama al método para cargar todas las imágenes
    });
  }

  loadAllImages(): void {
    this.news.forEach(newsItem => {
      this.loadImages(newsItem.id);
    });
  }
  
  loadImages(newsId: number): void {
    console.log('Fetching images for newsId:', newsId); // Añade esta línea para depurar
    this.imageService.getImagesByNewId(newsId).subscribe(
      images => {
        console.log('Images for news id', newsId, ':', images);
        this.images[newsId] = images; // Guarda las imágenes en el objeto images utilizando el id de la noticia como clave
      },
      error => {
        console.error('Error fetching images for news id', newsId, ':', error); // Añade esta línea para depurar
      }
    );
  }

  closeModal() {
    this.showModal = false;
    this.router.navigate(['/']);
  }
}
