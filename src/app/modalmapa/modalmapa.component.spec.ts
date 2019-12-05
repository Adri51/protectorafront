import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalmapaComponent } from './modalmapa.component';

describe('ModalmapaComponent', () => {
  let component: ModalmapaComponent;
  let fixture: ComponentFixture<ModalmapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalmapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalmapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
