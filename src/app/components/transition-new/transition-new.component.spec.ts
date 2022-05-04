import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionNewComponent } from './transition-new.component';

describe('TransitionNewComponent', () => {
  let component: TransitionNewComponent;
  let fixture: ComponentFixture<TransitionNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitionNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
