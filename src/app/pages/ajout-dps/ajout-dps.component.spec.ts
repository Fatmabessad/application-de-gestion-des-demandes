import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDpsComponent } from './ajout-dps.component';

describe('AjoutDpsComponent', () => {
  let component: AjoutDpsComponent;
  let fixture: ComponentFixture<AjoutDpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjoutDpsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutDpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
