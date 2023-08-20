import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgsuccessComponent } from './msgsuccess.component';

describe('MsgsuccessComponent', () => {
  let component: MsgsuccessComponent;
  let fixture: ComponentFixture<MsgsuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsgsuccessComponent]
    });
    fixture = TestBed.createComponent(MsgsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
