import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class GsapService {
  public static transitionFinished: Promise<void> = Promise.resolve();
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  private _scrollTrigger: any;
  private _splitText: any;

  constructor() {
    if (this.isBrowser) {
      this.initGsap();
    }
  }

  private async initGsap() {
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    const { SplitText } = await import('gsap/SplitText');

    this._scrollTrigger = ScrollTrigger;
    this._splitText = SplitText;

    gsap.registerPlugin(ScrollTrigger, SplitText);
  }

  public get core() {
    return gsap;
  }

  public get ScrollTrigger() {
    return this._scrollTrigger;
  }

  public get SplitText() {
    return this._splitText;
  }

  public get isBrowserPlatform() {
    return this.isBrowser;
  }

  public get transitionDone() {
    return GsapService.transitionFinished;
  }
}
