import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderanimationComponent } from './loaderanimation.component';

describe('LoaderanimationComponent', () => {
  let component: LoaderanimationComponent;
  let fixture: ComponentFixture<LoaderanimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderanimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
