import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTestDriveComponent } from './free-test-drive.component';

describe('FreeTestDriveComponent', () => {
  let component: FreeTestDriveComponent;
  let fixture: ComponentFixture<FreeTestDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeTestDriveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeTestDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
