import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutSignalComponent } from './without-signal.component';

describe('WithoutSignalComponent', () => {
  let component: WithoutSignalComponent;
  let fixture: ComponentFixture<WithoutSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithoutSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
