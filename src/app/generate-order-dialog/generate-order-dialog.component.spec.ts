import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateOrderDialogComponent } from './generate-order-dialog.component';

describe('GenerateOrderDialogComponent', () => {
  let component: GenerateOrderDialogComponent;
  let fixture: ComponentFixture<GenerateOrderDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateOrderDialogComponent]
    });
    fixture = TestBed.createComponent(GenerateOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
