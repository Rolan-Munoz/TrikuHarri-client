// this component is the navbar of the application, it contains the language switcher and the logo of the application
// It uses the translate pipe to translate the text in the application. The translate pipe is imported from the app-translate module.
// The translate pipe is used to translate the text in the application. It uses the language service to get the translations from the server.  
// The language service is used to get the translations from the server. It uses the HTTP client to make a request to the server to get the translations.
// The language service is used to change the language of the application. It uses the language service to change the language of the application.
// The language service is used to get the translations from the server. It uses the HTTP client to make a request to the assets folder to get the static translations.
// The language service is used to change the language of the application. It uses the language service to change the language of the application.
// Constructor is used to inject the language service into the component. It uses the language service to get the translations from the server.
// The changeLanguage method is used to change the language of the application. It uses the language service to change the language of the application.

import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSplotch } from '@fortawesome/free-solid-svg-icons';
import { LanguageServiceService } from '../../services/language-service.service';
import { TextHeaderComponent } from "../text-header/text-header.component";
import { WaterComponent } from "../../components/categories/water/water.component";
import { EnergyComponent } from "../../components/categories/energy/energy.component";
import { EnvironmentComponent } from "../../components/categories/environment/environment.component";
import { UrbanismComponent } from "../../components/categories/urbanism/urbanism.component";
import { MobilityComponent } from "../../components/categories/mobility/mobility.component";
import { InfraestructureComponent } from "../../components/categories/infraestructure/infraestructure.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [TextHeaderComponent, FontAwesomeModule, RouterModule, WaterComponent, EnergyComponent, EnvironmentComponent, UrbanismComponent, MobilityComponent, InfraestructureComponent]
})
export class NavbarComponent {
    
    

translations: { [x: string]: string; } = {};
faSplotch = faSplotch;
selectedView: string = '';

constructor(private languageService: LanguageServiceService) {
this.languageService.getTranslation().subscribe((translations: { [x: string]: string; }) => {
    this.translations = translations;
});
}

changeLanguage(language: string) {
this.languageService.changeLanguage(language);
console.log('Language changed to: ' + language);
}






}
