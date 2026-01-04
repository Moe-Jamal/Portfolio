import { Component, input } from '@angular/core';
import { Bulb } from '../bulb/bulb';

@Component({
  selector: 'app-page-title',
  imports: [Bulb],
  templateUrl: './page-title.html',
  styleUrl: './page-title.css',
})
export class PageTitle {
  title = input<string>('');
  description = input<string>('');
}
