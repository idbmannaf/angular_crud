import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPhoneComponent } from './edit.component';

describe('EditPhoneComponent', () => {
  let component: EditPhoneComponent;
  let fixture: ComponentFixture<EditPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
