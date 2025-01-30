import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaNotasComponent } from './vista-notas.component';

describe('VistaNotasComponent', () => {
  let component: VistaNotasComponent;
  let fixture: ComponentFixture<VistaNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaNotasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
