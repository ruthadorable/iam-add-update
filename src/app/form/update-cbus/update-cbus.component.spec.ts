import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCbusComponent } from './update-cbus.component';

describe('UpdateCbusComponent', () => {
  let component: UpdateCbusComponent;
  let fixture: ComponentFixture<UpdateCbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCbusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
