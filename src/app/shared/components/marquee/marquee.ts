import { Component, input } from '@angular/core';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.html',
  styleUrl: './marquee.css',
  imports: [],
})
export class Marquee {
  text = input.required<string[]>();
  direction = input<'left' | 'right'>('left');
  speed = input<number>(40);
}
