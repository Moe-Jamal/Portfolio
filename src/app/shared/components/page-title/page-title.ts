import { Component, input } from '@angular/core';
import { Bulb } from '../bulb/bulb';
import { SplitTextDirective } from '@shared/directives/split-text.directive';

@Component({
  selector: 'app-page-title',
  imports: [Bulb, SplitTextDirective],
  templateUrl: './page-title.html',
  styleUrl: './page-title.css',
})
export class PageTitle {
  title = input<string>('');
  description = input<string>('');
}
