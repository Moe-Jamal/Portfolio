import { Component } from '@angular/core';
import { Bulb } from '@shared/components/bulb/bulb';
import { MainButton } from '@shared/components/main-button/main-button';

@Component({
  selector: 'app-about-preview',
  templateUrl: './about-preview.html',
  styleUrl: './about-preview.css',
  imports: [MainButton, Bulb],
})
export class AboutPreviewComponent {}
