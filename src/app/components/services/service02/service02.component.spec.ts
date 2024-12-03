import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service02Component } from './service02.component';

describe('Service02Component', () => {
  let component: Service02Component;
  let fixture: ComponentFixture<Service02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Service02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
