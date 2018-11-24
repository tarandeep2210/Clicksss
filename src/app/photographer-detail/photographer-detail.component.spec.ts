import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerDetailComponent } from './photographer-detail.component';

describe('PhotographerDetailComponent', () => {
  let component: PhotographerDetailComponent;
  let fixture: ComponentFixture<PhotographerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
