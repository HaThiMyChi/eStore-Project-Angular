import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorynavigationComponent } from './categorynavigation.component';

describe('CategorynavigationComponent', () => {
  let component: CategorynavigationComponent;
  let fixture: ComponentFixture<CategorynavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorynavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorynavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
