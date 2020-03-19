import { TestBed } from '@angular/core/testing';

import { BasketService } from './basket.service';

describe('BasketService', () => {
  let service: BasketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have an intial total basket value of 0', () => {
    expect(service.basketTotal).toEqual(0);
  });

  it('should calculate correctly the basket value when something is added', () => {
    service.addAmountOnBasketTotal(1);
    expect(service.basketTotal).toEqual(1);
  });
});
