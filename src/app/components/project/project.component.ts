import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Project } from '../../models/project';
import { LanguageServiceService } from '../../services/language-service.service';
import { ProjectsService } from '../../services/projects.service';
import { AppTranslateModule } from '../../utils/app-translatate.module';
import { ImagesComponent } from '../images/images/images.component';





@Component({
  selector: 'app-project',
  standalone: true,
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  imports: [AppTranslateModule, RouterModule, ImagesComponent, NgStyle]
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];
  currentLanguage: string;
  urlDeImagen: string | undefined;
  @Input() categoryId: number | undefined;

  constructor(private projectService: ProjectsService, public languageService: LanguageServiceService, private router: Router) {
    this.currentLanguage = this.languageService.language.value;
  }

  ngOnInit(): void {
    if (this.categoryId) {
      this.projectService.getAllProjectsByCategory(this.categoryId).subscribe((projects: Project[]) => {
        this.projects = projects;
      });
    }
  }

  trackByProjectId(index: number, project: Project): number {
    return project.id;
  }
}
