import { Component } from '@angular/core';
import { Bulb } from '@shared/components/bulb/bulb';
import { MainButton } from '@shared/components/main-button/main-button';
import { SplitTextDirective } from '@shared/directives/split-text.directive';

@Component({
  selector: 'app-about-preview',
  templateUrl: './about-preview.html',
  styleUrl: './about-preview.css',
  imports: [MainButton, Bulb, SplitTextDirective],
})
export class AboutPreviewComponent {}
