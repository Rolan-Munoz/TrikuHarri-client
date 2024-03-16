import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-text-header',
  standalone: true,
  imports: [],
  templateUrl: './text-header.component.html',
  styleUrl: './text-header.component.css'
})
export class TextHeaderComponent implements AfterViewInit{
  constructor(private elRef: ElementRef) { }

  ngAfterViewInit() {
    const p = this.elRef.nativeElement.querySelector('.text p');
    const words = p.innerText.split(' ');
    p.innerHTML = '';
    for (let i = 0; i < words.length; i++) {
      const span = document.createElement('span');
      span.innerText = words[i] + ' ';
      span.style.background = '#11a59c';
      span.style.color = 'white';
      span.style.lineHeight = '2';
      span.style.padding = '2px 2px';
      
      p.appendChild(span);
    }
  }

}
