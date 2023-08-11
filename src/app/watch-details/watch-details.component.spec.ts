import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchDetailsComponent } from './watch-details.component';

describe('WatchDetailsComponent', () => {
  let component: WatchDetailsComponent;
  let fixture: ComponentFixture<WatchDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchDetailsComponent]
    });
    fixture = TestBed.createComponent(WatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
