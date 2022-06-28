import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMyArticlesComponent } from './page-my-articles.component';

describe('PageMyArticlesComponent', () => {
  let component: PageMyArticlesComponent;
  let fixture: ComponentFixture<PageMyArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMyArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMyArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
