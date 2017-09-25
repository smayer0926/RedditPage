import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotCollectionComponent } from './hot-collection.component';

describe('HotCollectionComponent', () => {
  let component: HotCollectionComponent;
  let fixture: ComponentFixture<HotCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
