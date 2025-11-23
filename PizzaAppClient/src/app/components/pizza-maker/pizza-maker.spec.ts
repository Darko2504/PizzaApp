import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaMaker } from './pizza-maker';

describe('PizzaMaker', () => {
  let component: PizzaMaker;
  let fixture: ComponentFixture<PizzaMaker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaMaker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaMaker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
