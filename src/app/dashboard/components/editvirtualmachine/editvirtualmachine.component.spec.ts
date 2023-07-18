import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvirtualmachineComponent } from './editvirtualmachine.component';

describe('EditvirtualmachineComponent', () => {
  let component: EditvirtualmachineComponent;
  let fixture: ComponentFixture<EditvirtualmachineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditvirtualmachineComponent]
    });
    fixture = TestBed.createComponent(EditvirtualmachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
