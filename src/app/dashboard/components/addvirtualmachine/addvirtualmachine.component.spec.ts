import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvirtualmachineComponent } from './addvirtualmachine.component';

describe('AddvirtualmachineComponent', () => {
  let component: AddvirtualmachineComponent;
  let fixture: ComponentFixture<AddvirtualmachineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddvirtualmachineComponent]
    });
    fixture = TestBed.createComponent(AddvirtualmachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
