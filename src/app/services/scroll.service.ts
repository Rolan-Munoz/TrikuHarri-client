import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollToProjectsSource = new Subject<void>();

  scrollToProjects$ = this.scrollToProjectsSource.asObservable();

  scrollToProjects(): void {
    this.scrollToProjectsSource.next();
  }
}
