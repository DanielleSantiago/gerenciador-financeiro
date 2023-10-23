import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesasListagemComponent } from './despesas-listagem.component';

describe('DespesasListagemComponent', () => {
  let component: DespesasListagemComponent;
  let fixture: ComponentFixture<DespesasListagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DespesasListagemComponent]
    });
    fixture = TestBed.createComponent(DespesasListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
