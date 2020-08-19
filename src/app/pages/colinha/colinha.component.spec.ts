import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColinhaComponent } from './colinha.component';

describe('ColinhaComponent', () => {
  let component: ColinhaComponent;
  let fixture: ComponentFixture<ColinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
