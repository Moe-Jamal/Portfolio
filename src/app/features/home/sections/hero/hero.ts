import { Component } from '@angular/core';
import { Bulb } from '@shared/components/bulb/bulb';
import { MainButton } from '@shared/components/main-button/main-button';
import { Marquee } from '@shared/components/marquee/marquee';
import { SplitTextDirective } from '@shared/directives/split-text.directive';

@Component({
  selector: 'app-hero',
  imports: [MainButton, Marquee, Bulb, SplitTextDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent {}
