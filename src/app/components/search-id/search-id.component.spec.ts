import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIDComponent } from './search-id.component';

describe('SearchIDComponent', () => {
  let component: SearchIDComponent;
  let fixture: ComponentFixture<SearchIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
