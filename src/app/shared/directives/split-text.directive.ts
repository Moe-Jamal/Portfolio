import { Directive, ElementRef, Input, AfterViewInit, inject, OnDestroy } from '@angular/core';
import { GsapService } from '../services/gsap.service';

@Directive({
  selector: '[appSplitText]',
  standalone: true,
})
export class SplitTextDirective implements AfterViewInit, OnDestroy {
  @Input() delay = 0;

  private el = inject(ElementRef);
  private gsapService = inject(GsapService);

  private ctx: gsap.Context | null = null;
  private split: any;

  ngAfterViewInit() {
    if (this.gsapService.isBrowserPlatform) {
      this.tryAnimate();
    }
  }

  private async tryAnimate(retries = 0) {
    if (this.gsapService.SplitText && this.gsapService.ScrollTrigger) {
      // Wait for view transition to finish
      await this.gsapService.transitionDone;
      this.gsapService.ScrollTrigger.refresh();
      this.animateText();
    } else if (retries < 10) {
      // Wait for dynamic imports to finish in GsapService
      setTimeout(() => this.tryAnimate(retries + 1), 100);
    }
  }

  private animateText() {
    const element = this.el.nativeElement;

    // Create animation context for easy cleanup
    this.ctx = this.gsapService.core.context(() => {
      // Use SplitText plugin
      try {
        this.split = new this.gsapService.SplitText(element, {
          type: 'chars, words',
          charsClass: 'split-char',
        });

        this.gsapService.core.from(this.split.chars, {
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 50,
          opacity: 0,
          rotationX: -90,
          filter: 'blur(10px)',
          duration: 1.0,
          ease: 'power4',
          stagger: 0.04,
          delay: this.delay,
        });
      } catch (error) {
        console.warn('GSAP SplitText failed:', error);
      }
    }, element);
  }

  ngOnDestroy() {
    if (this.ctx) {
      this.ctx.revert();
    }
    if (this.split) {
      this.split.revert();
    }
  }
}
