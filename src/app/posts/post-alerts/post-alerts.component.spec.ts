import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAlertsComponent } from './post-alerts.component';

describe('PostAlertsComponent', () => {
  let component: PostAlertsComponent;
  let fixture: ComponentFixture<PostAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
