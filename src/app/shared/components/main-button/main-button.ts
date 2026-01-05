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

  buttonClasses() {
    const base =
      'flex w-full gap-4 items-center justify-center px-8 py-4 sm:px-10 sm:py-6 ' +
      'rounded-full text-[13px] text-white duration-300 transition-all cursor-pointer uppercase';

    const variant = this.variant();

    const variantClass =
      variant === 'outline'
        ? 'bg-transparent border-2 border-primary hover:bg-primary'
        : 'bg-primary hover:bg-primary/70';

    return `${base} ${variantClass}`;
  }
}
