import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControversialCollectionComponent } from './controversial-collection.component';

describe('ControversialCollectionComponent', () => {
  let component: ControversialCollectionComponent;
  let fixture: ComponentFixture<ControversialCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControversialCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControversialCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
