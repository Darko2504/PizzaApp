import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewOrders } from './preview-orders';

describe('PreviewOrders', () => {
  let component: PreviewOrders;
  let fixture: ComponentFixture<PreviewOrders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewOrders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewOrders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
