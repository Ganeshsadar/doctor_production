import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecintActivityComponent } from './recint-activity.component';

describe('RecintActivityComponent', () => {
  let component: RecintActivityComponent;
  let fixture: ComponentFixture<RecintActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecintActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecintActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
