import { Component } from '@angular/core';
import { ProjectComponent } from '../../project/project.component';

@Component({
  selector: 'app-service02',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './service02.component.html',
  styleUrl: './service02.component.css'
})
export class Service02Component {
  
  selectedView: string | undefined;

}
