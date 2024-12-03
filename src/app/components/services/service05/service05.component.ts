import { Component } from '@angular/core';
import { ProjectComponent } from '../../project/project.component';

@Component({
  selector: 'app-service05',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './service05.component.html',
  styleUrl: './service05.component.css'
})
export class Service05Component {

  selectedView: string | undefined;

}
