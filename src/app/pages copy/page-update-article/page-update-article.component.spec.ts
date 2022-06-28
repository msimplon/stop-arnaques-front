import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUpdateArticleComponent } from './page-update-article.component';

describe('PageUpdateArticleComponent', () => {
  let component: PageUpdateArticleComponent;
  let fixture: ComponentFixture<PageUpdateArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUpdateArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUpdateArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
