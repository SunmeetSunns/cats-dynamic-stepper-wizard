import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsDynamicStepperWizard } from './cats-dynamic-stepper-wizard';

describe('CatsDynamicStepperWizard', () => {
  let component: CatsDynamicStepperWizard;
  let fixture: ComponentFixture<CatsDynamicStepperWizard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatsDynamicStepperWizard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatsDynamicStepperWizard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
