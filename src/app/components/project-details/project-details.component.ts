import { Location } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../models/project';
import { LanguageServiceService } from '../../services/language-service.service';
import { ProjectsService } from '../../services/projects.service';
import { AppTranslateModule } from '../../utils/app-translatate.module';
import { ImagesComponent } from "../images/images/images.component";

@Component({
    selector: 'app-project-details',
    standalone: true,
    templateUrl: './project-details.component.html',
    styleUrl: './project-details.component.css',
    imports: [AppTranslateModule, ImagesComponent]
})
export class ProjectDetailsComponent implements OnInit {

  project?: Project;
  showModal: boolean = false;
  currentLanguage: string;

  constructor(private activatedRoute: ActivatedRoute, private projectService: ProjectsService, public languageService: LanguageServiceService, private location: Location) {
    this.currentLanguage = this.languageService.language.value;
  }

  ngOnInit(): void {
    this.showModal = true;
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.projectService.getProjectsById(+id).subscribe(
        (project: Project) => {
          this.project = project;
        },
        (error) => {
          // manejar el error aquí, por ejemplo, mostrar un mensaje de error al usuario
          console.error('Error al obtener el proyecto:', error);
        }
      );
    } else {
      console.error('id no valido');
    }
  }
  
  closeModal() {
    this.showModal = false;
    this.location.back();
}
  

}
