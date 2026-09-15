import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acceuille } from './acceuille';

describe('Acceuille', () => {
  let component: Acceuille;
  let fixture: ComponentFixture<Acceuille>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Acceuille]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acceuille);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
