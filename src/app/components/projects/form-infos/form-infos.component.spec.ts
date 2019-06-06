import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInfosComponent } from './form-infos.component';

describe('FormInfosComponent', () => {
  let component: FormInfosComponent;
  let fixture: ComponentFixture<FormInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
