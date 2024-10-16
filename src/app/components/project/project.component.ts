import { Component,  Input, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { LanguageServiceService } from '../../services/language-service.service';
import { ProjectsService } from '../../services/projects.service';
import { AppTranslateModule } from '../../utils/app-translatate.module';
import { ImagesComponent } from '../images/images/images.component';


@Component({
    selector: 'app-project',
    standalone: true,
    templateUrl: './project.component.html',
    styleUrl: './project.component.css',
    imports: [AppTranslateModule, ImagesComponent]
})
export class ProjectComponent implements OnInit{

  projects: Project[] = [];
  currentLanguage: string;
  urlDeImagen: string | undefined; 
  @Input() categoryId: number | undefined;
  
  
  constructor(private projectService: ProjectsService, public languageService: LanguageServiceService) {
    this.currentLanguage = this.languageService.language.value;
  }
  
  ngOnInit(): void {
    if (this.categoryId) {
      this.projectService.getAllProjectsByCategory(this.categoryId).subscribe((projects: Project[]) => {
        this.projects = projects;
      });
    }
}
}
