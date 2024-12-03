import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service04Component } from './service04.component';

describe('Service04Component', () => {
  let component: Service04Component;
  let fixture: ComponentFixture<Service04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service04Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Service04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
