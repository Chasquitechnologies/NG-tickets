import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDataAjaxComponent } from './base-data-ajax.component';

describe('BaseDataAjaxComponent', () => {
  let component: BaseDataAjaxComponent;
  let fixture: ComponentFixture<BaseDataAjaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseDataAjaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDataAjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
