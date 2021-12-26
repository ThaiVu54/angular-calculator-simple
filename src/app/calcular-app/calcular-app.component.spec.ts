import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularAppComponent } from './calcular-app.component';

describe('CalcularAppComponent', () => {
  let component: CalcularAppComponent;
  let fixture: ComponentFixture<CalcularAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcularAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcularAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
