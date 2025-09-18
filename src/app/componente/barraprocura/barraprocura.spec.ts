import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Barraprocura } from './barraprocura';

describe('Barraprocura', () => {
  let component: Barraprocura;
  let fixture: ComponentFixture<Barraprocura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Barraprocura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Barraprocura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
