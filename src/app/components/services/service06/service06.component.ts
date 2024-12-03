import { Component } from '@angular/core';
import { ProjectComponent } from '../../project/project.component';

@Component({
  selector: 'app-service06',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './service06.component.html',
  styleUrl: './service06.component.css'
})
export class Service06Component {

  selectedView: string | undefined;

}
