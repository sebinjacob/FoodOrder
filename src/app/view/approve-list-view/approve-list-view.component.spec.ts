import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveListViewComponent } from './approve-list-view.component';

describe('ApproveListViewComponent', () => {
  let component: ApproveListViewComponent;
  let fixture: ComponentFixture<ApproveListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
