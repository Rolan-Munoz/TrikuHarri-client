import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service06Component } from './service06.component';

describe('Service06Component', () => {
  let component: Service06Component;
  let fixture: ComponentFixture<Service06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service06Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Service06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
