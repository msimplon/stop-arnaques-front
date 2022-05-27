import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConseilsComponent } from './page-conseils.component';

describe('PageConseilsComponent', () => {
  let component: PageConseilsComponent;
  let fixture: ComponentFixture<PageConseilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageConseilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageConseilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
