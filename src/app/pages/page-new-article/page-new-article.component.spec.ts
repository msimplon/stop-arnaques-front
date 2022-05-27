import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewArticleComponent } from './page-new-article.component';

describe('PageNewArticleComponent', () => {
  let component: PageNewArticleComponent;
  let fixture: ComponentFixture<PageNewArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNewArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
