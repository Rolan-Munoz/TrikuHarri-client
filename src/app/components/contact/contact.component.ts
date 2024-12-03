import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  showModal: boolean = false;

  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.router.navigate(['/']);
  }

}
