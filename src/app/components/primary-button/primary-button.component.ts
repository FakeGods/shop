import { Component, input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: ` <button (click)="handleButtonClick()">{{ label() }}</button> `,
  styleUrl: './primary-button.component.css',
})
export class PrimaryButtonComponent {
  label = input('');

  handleButtonClick() {
    console.log('Button clicked');
  }
}
