import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDiscussionsComponent } from './cat-discussions.component';

describe('CatDiscussionsComponent', () => {
  let component: CatDiscussionsComponent;
  let fixture: ComponentFixture<CatDiscussionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatDiscussionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatDiscussionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
