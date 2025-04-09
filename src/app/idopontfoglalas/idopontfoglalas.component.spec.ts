import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdopontfoglalasComponent } from './idopontfoglalas.component';

describe('IdopontfoglalasComponent', () => {
  let component: IdopontfoglalasComponent;
  let fixture: ComponentFixture<IdopontfoglalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdopontfoglalasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdopontfoglalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
