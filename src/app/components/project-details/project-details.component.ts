import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { Project } from '../../models/project';
import { LanguageServiceService } from '../../services/language-service.service';
import { ProjectsService } from '../../services/projects.service';
import { AppTranslateModule } from '../../utils/app-translatate.module';
import { ImagesComponent } from '../images/images/images.component';




@Component({
    selector: 'app-project-details',
    standalone: true,
    templateUrl: './project-details.component.html',
    styleUrl: './project-details.component.css',
    imports: [AppTranslateModule, ImagesComponent, RouterModule]
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {

  project?: Project;
  showModal: boolean = false;
  currentLanguage: string;
  private unsubscribe$ = new Subject<void>();
  translations: { [x: string]: string; } = {};
  videoUrl: any;


  constructor(private activatedRoute: ActivatedRoute, private projectService: ProjectsService, public languageService: LanguageServiceService,
    private location: Location, private sanitizer: DomSanitizer) {
    this.currentLanguage = this.languageService.language.value;
    this.languageService.getTranslation().subscribe((translations: { [x: string]: string; }) => {
      this.translations = translations;
  });
  }

  ngOnInit(): void {
    this.showModal = true;
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.projectService.getProjectsById(+id).subscribe(
        (project: Project) => {
          this.project = project;
          let videoBlob = new Blob([this.project.video], { type: 'video/mp4' });
        this.videoUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(videoBlob));
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

  changeLanguage(language: string) {
    this.languageService.changeLanguage(language);
    console.log('Language changed to: ' + language);
    }
  
  closeModal() {
    this.showModal = false;
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.location.back();
}
  
ngOnDestroy(): void {
  this.unsubscribe$.next();
  this.unsubscribe$.complete();
}

}
