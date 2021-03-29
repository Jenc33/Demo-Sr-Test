import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateIDComponent } from './generate-id.component';

describe('GenerateIDComponent', () => {
  let component: GenerateIDComponent;
  let fixture: ComponentFixture<GenerateIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
