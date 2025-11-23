import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCards } from './pizza-cards';

describe('PizzaCards', () => {
  let component: PizzaCards;
  let fixture: ComponentFixture<PizzaCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
