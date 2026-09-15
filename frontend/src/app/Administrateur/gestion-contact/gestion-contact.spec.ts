import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionContact } from './gestion-contact';

describe('GestionContact', () => {
  let component: GestionContact;
  let fixture: ComponentFixture<GestionContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionContact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
