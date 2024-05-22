import { Component } from '@angular/core';
import { ProjectComponent } from "../../project/project.component";

@Component({
    selector: 'app-energy',
    standalone: true,
    templateUrl: './energy.component.html',
    styleUrl: './energy.component.css',
    imports: [ProjectComponent]
})
export class EnergyComponent {
    selectedView: string | undefined;


}
