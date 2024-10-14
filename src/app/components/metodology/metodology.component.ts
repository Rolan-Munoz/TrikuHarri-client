import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageServiceService } from '../../services/language-service.service';

@Component({
  selector: 'app-metodology',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './metodology.component.html',
  styleUrl: './metodology.component.css'
})
export class MetodologyComponent {
  translations: { [x: string]: string; } = {};
  selectedView: string = '';
  @Output() viewChange = new EventEmitter<string>();

  changeView(view: string) {
    this.viewChange.emit(view);
  }
  
  constructor(private languageService: LanguageServiceService) {
    this.languageService.getTranslation().subscribe((translations: { [x: string]: string; }) => {
      this.translations = translations;
  });
  }
  

}
