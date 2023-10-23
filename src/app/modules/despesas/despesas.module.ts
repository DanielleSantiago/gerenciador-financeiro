import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DespesasListagemComponent } from './components/despesas-listagem/despesas-listagem.component';
import { DespesasCadastroComponent } from './components/despesas-cadastro/despesas-cadastro.component';



@NgModule({
  declarations: [
  
    DespesasListagemComponent,
       DespesasCadastroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DespesasModule { }
