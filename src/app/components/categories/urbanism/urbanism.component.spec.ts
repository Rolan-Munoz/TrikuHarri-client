import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanismComponent } from './urbanism.component';

describe('UrbanismComponent', () => {
  let component: UrbanismComponent;
  let fixture: ComponentFixture<UrbanismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrbanismComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UrbanismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
