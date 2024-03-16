// this pipe is used to translate the keys of the json files
// it uses the language service to get the translations from the server
// it uses the language service to change the language of the application

import { Pipe, PipeTransform } from '@angular/core';
import { LanguageServiceService } from '../services/language-service.service';

@Pipe({
    name: 'translate',
    pure: false // this is to update the translation when the language changes
})
export class TranslatePipe implements PipeTransform {
    constructor(private languageService: LanguageServiceService) {}

    transform(key: string): string {
    return this.languageService.getTranslation(key);
    }
}