import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registerr } from './register';

describe('Register', () => {
  let component: Registerr;
  let fixture: ComponentFixture<Registerr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registerr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registerr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
