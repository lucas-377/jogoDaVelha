import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Variaveis
  squares: string[];
  winner: string;
  xIsNext: boolean;

  constructor() {}

  // Inicia o jogo
  ngOnInit() {
    this.newGame();
  }

  // Cria o mapa e zera o vencedor
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  // Pega o jogador atual
  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  // Jogada atual + verificacao do vencedor
  makeMove(idx: number) {
    if(!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }

  // Calcula as possiveis posicoes do vencedor
  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if ( this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
          return this.squares[a];
      }
    }
    return null;
  }
}
