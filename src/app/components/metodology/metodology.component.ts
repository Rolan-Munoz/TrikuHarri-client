import { Component, OnInit } from '@angular/core';
import { LanguageServiceService } from '../../services/language-service.service';

@Component({
  selector: 'app-metodology',
  standalone: true,
  imports: [],
  templateUrl: './metodology.component.html',
  styleUrl: './metodology.component.css'
})
export class MetodologyComponent {
  translations: { [x: string]: string; } = {};
  
  constructor(private languageService: LanguageServiceService) {
    this.languageService.getTranslation().subscribe((translations: { [x: string]: string; }) => {
      this.translations = translations;
  });
  }
  

}
