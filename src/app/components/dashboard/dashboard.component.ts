import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../../models/news';
import { Project } from '../../models/project';
import { AuthService } from '../../services/auth.service';
import { NewsService } from '../../services/news.service';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  newsList: News[] = [];
  projectList: Project[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private newsService: NewsService,
    private http: HttpClient,
    private projectService: ProjectsService
  ) {}

  ngOnInit(): void {
    this.loadNews();
    this.loadProjects();
  }

  onClickNews(): void {
    this.router.navigate(['/admin/form-news']);
  }

  onClickProjects(): void {
    this.router.navigate(['/admin/form-projects']);
  }

  logout(): void {
    this.authService.logout();
  }

  loadNews(): void {
    this.newsService.getAllNews().subscribe(
      (news) => {
        this.newsList = news;
      },
      (error) => {
        console.error('Error loading news:', error);
      }
    );
  }

  loadProjects(): void {
    this.projectService.getAllProjects().subscribe(
      (projects) => {
        this.projectList = projects;
      },
      (error) => {
        console.error('Error loading projects:', error);
      }
    )
  }

  deleteNews(id: number): void {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      this.http.delete<void>(`http://localhost:8080/api/news/${id}/remove`, { headers }).subscribe(
        () => {
          this.newsList = this.newsList.filter(news => news.id !== id);
        },
        (error) => {
          console.error('Error deleting news:', error);
        }
      );
    } else {
      console.error('Error: Token no encontrado');
    }
  }

  deleteProjects(id: number): void {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      this.http.delete<void>(`http://localhost:8080/api/projects/${id}/remove`, { headers }).subscribe(
        () => {
          this.projectList = this.projectList.filter(project => project.id !== id);
        },
        (error) => {
          console.error('Error deleting project:', error);
        }
      );
    } else {
      console.error('Error: Token no encontrado');
    }
  }

}

