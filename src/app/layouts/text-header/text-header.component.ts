// this component is a standalone component that is used to display the main text in the header of the application
// It uses the translate pipe to translate the text in the application. The translate pipe is imported from the app-translate module.
// The updateText method is used to update the text in the component. It uses the element reference to get the element from the DOM and update the text in the component.
// ngAfterViewInit is used to call the updateText method after the view is initialized. It uses the element reference to get the element from the DOM and update the text in the component.
// Constructor is used to inject the element reference and the language service into the component. It uses the language service to get the translations from the server.

import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { LanguageServiceService } from '../../services/language-service.service';
import { AppTranslateModule } from '../../utils/app-translatate.module';


@Component({
  selector: 'app-text-header',
  standalone: true,
  imports: [AppTranslateModule],
  templateUrl: './text-header.component.html',
  styleUrl: './text-header.component.css'
})
export class TextHeaderComponent implements AfterViewInit{
  MAIN_TEXT: string = '';

  constructor(private elRef: ElementRef, private languageService: LanguageServiceService) { 
    this.languageService.getTranslation().subscribe((translations: { [x: string]: string; }) => {
      this.MAIN_TEXT = translations['MAIN_TEXT'];
      this.updateText();
    });
  }

  updateText() {
    const p = this.elRef.nativeElement.querySelector('.text p');
    const words = this.MAIN_TEXT.split(' ');
    p.innerHTML = '';
    for (let i = 0; i < words.length; i++) {
      const span = document.createElement('span');
      span.innerText = words[i] + ' ';
      span.style.background = '#11a59c';
      span.style.color = 'white';
      span.style.lineHeight = '2';
      span.style.padding = '2px 2px';
      
      p.appendChild(span);
    }
  }

  ngAfterViewInit() {
    this.updateText();
  }

}
