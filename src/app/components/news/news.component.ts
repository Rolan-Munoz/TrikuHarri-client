import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../../models/news';
import { LanguageServiceService } from '../../services/language-service.service';
import { NewsService } from '../../services/news.service';
import { AppTranslateModule } from "../../utils/app-translatate.module";

@Component({
    selector: 'app-news',
    standalone: true,
    templateUrl: './news.component.html',
    styleUrl: './news.component.css',
    imports: [AppTranslateModule]
})
export class NewsComponent implements OnInit {

  news: News[] = [];
  showModal: boolean = false;
  currentLanguage: string;

  constructor(private newsService: NewsService, private router: Router, public languageService: LanguageServiceService) { 
    this.currentLanguage = this.languageService.language.value;
  }

  ngOnInit(): void {
    this.showModal = true;
    this.newsService.getAllNews().subscribe((news: News[]) => {
      this.news = news.map(item => ({ ...item, expanded: false }));
    });
  }

  closeModal() {
    this.showModal = false;
    this.router.navigate(['/']);
}
}
