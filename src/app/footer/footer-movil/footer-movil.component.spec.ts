import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMovilComponent } from './footer-movil.component';

describe('FooterMovilComponent', () => {
  let component: FooterMovilComponent;
  let fixture: ComponentFixture<FooterMovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterMovilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
