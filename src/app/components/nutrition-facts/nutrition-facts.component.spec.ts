import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionFactsComponent } from './nutrition-facts.component';

describe('NutritionFactsComponent', () => {
  let component: NutritionFactsComponent;
  let fixture: ComponentFixture<NutritionFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutritionFactsComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(NutritionFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
