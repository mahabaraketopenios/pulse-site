import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements OnInit {
  @Input('animateOnScroll') animationClass: string = 'animate-fadeInUp';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Start invisible
    this.renderer.addClass(this.el.nativeElement, 'opacity-0');
  }

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.removeClass(this.el.nativeElement, 'opacity-0');
            this.renderer.addClass(this.el.nativeElement, this.animationClass);
            observer.unobserve(this.el.nativeElement); // Animate once
          }
        });
      },
      { threshold: 0.2 } // 20% visible triggers animation
    );

    observer.observe(this.el.nativeElement);
  }
}