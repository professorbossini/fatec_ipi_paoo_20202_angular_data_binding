import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nome: string;
  exibirCaixa: boolean = false;

  alterarNome(elemento): void {
    this.nome = elemento.target.value;
  }

  lancarDado(): number {
    return Math.floor(Math.random() * 6) + 1;
  }
  adicionar(nomeInput): void {
    this.nome = nomeInput.value;
    this.exibirCaixa = true;
    // console.log(nomeInput.value);
    // console.log('Adicionando...');
  }
}
