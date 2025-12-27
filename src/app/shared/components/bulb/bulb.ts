import { Component, input } from '@angular/core';

@Component({
  selector: 'app-bulb',
  imports: [],
  templateUrl: './bulb.html',
  styleUrl: './bulb.css',
})
export class Bulb {
  bulbClasses = input<string>('');
}
