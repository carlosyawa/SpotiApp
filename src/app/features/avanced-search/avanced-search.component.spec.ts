import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvancedSearchComponent } from './avanced-search.component';

describe('AvancedSearchComponent', () => {
  let component: AvancedSearchComponent;
  let fixture: ComponentFixture<AvancedSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvancedSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
