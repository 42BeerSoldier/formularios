import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoUno } from './promo-uno';

describe('PromoUno', () => {
  let component: PromoUno;
  let fixture: ComponentFixture<PromoUno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromoUno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoUno);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
