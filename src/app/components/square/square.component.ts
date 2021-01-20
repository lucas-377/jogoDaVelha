import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {

  // Tipo de preenchimento dos botoes
  @Input() value: 'X' | 'O';

}
