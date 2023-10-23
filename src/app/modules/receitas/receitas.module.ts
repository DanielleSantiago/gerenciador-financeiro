import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceitasListagemComponent } from './components/receitas-listagem/receitas-listagem.component';
import { ReceitasCadastroComponent } from './components/receitas-cadastro/receitas-cadastro.component';



@NgModule({
  declarations: [
    ReceitasListagemComponent,
    ReceitasCadastroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReceitasModule { }
