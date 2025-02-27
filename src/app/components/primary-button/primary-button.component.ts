import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button
      class="bg-green-600 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-90"
      (click)="btnClicked.emit()"
    >
      {{ label() }}
    </button>
  `,
  styleUrl: './primary-button.component.css',
})
export class PrimaryButtonComponent {
  label = input('');

  btnClicked = output();

  handleButtonClick() {
    console.log('Button clicked');
  }
}
