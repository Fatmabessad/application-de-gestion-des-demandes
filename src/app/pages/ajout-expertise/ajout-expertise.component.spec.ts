import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutExpertiseComponent } from './ajout-expertise.component';

describe('AjoutExpertiseComponent', () => {
  let component: AjoutExpertiseComponent;
  let fixture: ComponentFixture<AjoutExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjoutExpertiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
