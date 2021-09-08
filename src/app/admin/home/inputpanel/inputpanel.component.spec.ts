import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputpanelComponent } from './inputpanel.component';

describe('InputpanelComponent', () => {
  let component: InputpanelComponent;
  let fixture: ComponentFixture<InputpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
