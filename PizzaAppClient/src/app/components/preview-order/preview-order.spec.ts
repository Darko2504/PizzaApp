import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewOrder } from './preview-order';

describe('PreviewOrder', () => {
  let component: PreviewOrder;
  let fixture: ComponentFixture<PreviewOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewOrder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
