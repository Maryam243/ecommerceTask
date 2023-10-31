import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProducsComponent } from './all-producs.component';

describe('AllProducsComponent', () => {
  let component: AllProducsComponent;
  let fixture: ComponentFixture<AllProducsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllProducsComponent]
    });
    fixture = TestBed.createComponent(AllProducsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
