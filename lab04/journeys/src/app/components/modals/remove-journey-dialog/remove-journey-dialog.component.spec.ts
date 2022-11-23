import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveJourneyDialogComponent } from './remove-journey-dialog.component';

describe('RemoveJourneyDialogComponent', () => {
  let component: RemoveJourneyDialogComponent;
  let fixture: ComponentFixture<RemoveJourneyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveJourneyDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveJourneyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
