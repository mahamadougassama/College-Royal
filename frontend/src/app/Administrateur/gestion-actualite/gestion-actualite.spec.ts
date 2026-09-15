import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionActualite } from './gestion-actualite';

describe('GestionActualite', () => {
  let component: GestionActualite;
  let fixture: ComponentFixture<GestionActualite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionActualite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionActualite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
