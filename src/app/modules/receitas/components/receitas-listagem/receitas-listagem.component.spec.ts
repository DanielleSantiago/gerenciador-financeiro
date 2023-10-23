import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasListagemComponent } from './receitas-listagem.component';

describe('ReceitasListagemComponent', () => {
  let component: ReceitasListagemComponent;
  let fixture: ComponentFixture<ReceitasListagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceitasListagemComponent]
    });
    fixture = TestBed.createComponent(ReceitasListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
