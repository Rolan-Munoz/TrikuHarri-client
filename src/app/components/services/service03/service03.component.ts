import { Component } from '@angular/core';
import { ProjectComponent } from '../../project/project.component';

@Component({
  selector: 'app-service03',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './service03.component.html',
  styleUrl: './service03.component.css'
})
export class Service03Component {

  selectedView: string | undefined;

}
