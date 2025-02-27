import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: ` <button (click)="btnClicked.emit()">{{ label() }}</button> `,
  styleUrl: './primary-button.component.css',
})
export class PrimaryButtonComponent {
  label = input('');

  btnClicked = output();

  handleButtonClick() {
    console.log('Button clicked');
  }
}
