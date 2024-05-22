import { Component } from '@angular/core';
import { ProjectComponent } from "../../project/project.component";

@Component({
    selector: 'app-mobility',
    standalone: true,
    templateUrl: './mobility.component.html',
    styleUrl: './mobility.component.css',
    imports: [ProjectComponent]
})
export class MobilityComponent {

}
