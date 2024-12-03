import { Component } from '@angular/core';
import { ProjectComponent } from '../../project/project.component';

@Component({
  selector: 'app-service04',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './service04.component.html',
  styleUrl: './service04.component.css'
})
export class Service04Component {

  selectedView: string | undefined;

}
