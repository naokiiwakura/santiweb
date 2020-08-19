import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoCadastrarComponent } from './partido-cadastrar.component';

describe('PartidoCadastrarComponent', () => {
  let component: PartidoCadastrarComponent;
  let fixture: ComponentFixture<PartidoCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidoCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
