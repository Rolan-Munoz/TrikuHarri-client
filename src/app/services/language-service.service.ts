// This service is used to change the language of the application. It uses the BehaviorSubject to change the language and load the translations from the JSON file. It also provides the method to get the translation of the key.
// The changeLanguage method is used to change the language of the application. It uses the BehaviorSubject to change the language and load the translations from the JSON file.
// The loadTranslations method is used to load the translations from the JSON file. It uses the HTTP client to make a request to the server to get the translations.
// Constructor is used to inject the HTTP client into the service. It uses the HTTP client to make a request to the server to get the translations.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {

  public language = new BehaviorSubject<string>('es');
  private translations = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) {
    this.loadTranslations(this.language.value);
  }

  changeLanguage(language: string) {
    this.language.next(language);
    this.loadTranslations(language);
  }

  loadTranslations(language: string) {
    this.http.get('../../assets/translates/' + language + '.json').subscribe((translations: any) => {
      this.translations.next(translations);
    });
  }

  getTranslation(key?: string) {
    if (key) {
      return this.translations.value[key];
    } else {
      return this.translations.asObservable();
    }
  }
  
}
