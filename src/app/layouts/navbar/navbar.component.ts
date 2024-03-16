import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { TextHeaderComponent } from "../text-header/text-header.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [TextHeaderComponent]
})
export class NavbarComponent {
  
}
