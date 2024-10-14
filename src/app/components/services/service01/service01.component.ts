import { Component } from '@angular/core';
import { ProjectComponent } from '../../project/project.component';

@Component({
  selector: 'app-service01',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './service01.component.html',
  styleUrl: './service01.component.css'
})
export class Service01Component {

  selectedView: string | undefined;
  
}
