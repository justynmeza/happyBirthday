import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTwoComponent } from './question-two.component';

describe('QuestionTwoComponent', () => {
  let component: QuestionTwoComponent;
  let fixture: ComponentFixture<QuestionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
