import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMovilWebComponent } from './header-movil-web.component';

describe('HeaderMovilWebComponent', () => {
  let component: HeaderMovilWebComponent;
  let fixture: ComponentFixture<HeaderMovilWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMovilWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMovilWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
