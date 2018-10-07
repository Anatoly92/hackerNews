import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTopBestComponent } from './new-top-best.component';

describe('NewTopBestComponent', () => {
  let component: NewTopBestComponent;
  let fixture: ComponentFixture<NewTopBestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTopBestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTopBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
