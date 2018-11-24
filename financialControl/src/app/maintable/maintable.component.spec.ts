
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintableComponent } from './maintable.component';

describe('MaintableComponent', () => {
  let component: MaintableComponent;
  let fixture: ComponentFixture<MaintableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
