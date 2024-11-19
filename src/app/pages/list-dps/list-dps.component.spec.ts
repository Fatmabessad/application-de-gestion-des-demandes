import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDpsComponent } from './list-dps.component';

describe('ListDpsComponent', () => {
  let component: ListDpsComponent;
  let fixture: ComponentFixture<ListDpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListDpsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
