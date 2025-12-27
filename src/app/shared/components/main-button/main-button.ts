import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, MoveRight } from 'lucide-angular';

@Component({
  selector: 'app-main-button',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './main-button.html',
  styleUrl: './main-button.css',
})
export class MainButton {
  label = input<string>('');
  icon = input<boolean>(false);
  link = input<string | null>(null);
  variant = input<'primary' | 'outline'>('primary');

  readonly MoveRight = MoveRight;
}
