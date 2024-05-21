import { Component } from '@angular/core';
import { ProjectComponent } from "../../project/project.component";

@Component({
    selector: 'app-environment',
    standalone: true,
    templateUrl: './environment.component.html',
    styleUrl: './environment.component.css',
    imports: [ProjectComponent]
})
export class EnvironmentComponent {

}
