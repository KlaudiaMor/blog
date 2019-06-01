import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterThnxComponent } from './register-thnx.component';

describe('RegisterThnxComponent', () => {
  let component: RegisterThnxComponent;
  let fixture: ComponentFixture<RegisterThnxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterThnxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterThnxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
