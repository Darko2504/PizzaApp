import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousOrder } from './previous-order';

describe('PreviousOrder', () => {
  let component: PreviousOrder;
  let fixture: ComponentFixture<PreviousOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousOrder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
