import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedIngredients } from './selected-ingredients';

describe('SelectedIngredients', () => {
  let component: SelectedIngredients;
  let fixture: ComponentFixture<SelectedIngredients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedIngredients]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedIngredients);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
