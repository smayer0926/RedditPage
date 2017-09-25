import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisingCollectionComponent } from './rising-collection.component';

describe('RisingCollectionComponent', () => {
  let component: RisingCollectionComponent;
  let fixture: ComponentFixture<RisingCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisingCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisingCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
