import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service05Component } from './service05.component';

describe('Service05Component', () => {
  let component: Service05Component;
  let fixture: ComponentFixture<Service05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service05Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Service05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
