import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesasCadastroComponent } from './despesas-cadastro.component';

describe('DespesasCadastroComponent', () => {
  let component: DespesasCadastroComponent;
  let fixture: ComponentFixture<DespesasCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DespesasCadastroComponent]
    });
    fixture = TestBed.createComponent(DespesasCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
