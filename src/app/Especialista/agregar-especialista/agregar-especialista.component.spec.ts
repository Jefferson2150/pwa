import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEspecialistaComponent } from './agregar-especialista.component';

describe('AgregarEspecialistaComponent', () => {
  let component: AgregarEspecialistaComponent;
  let fixture: ComponentFixture<AgregarEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEspecialistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
