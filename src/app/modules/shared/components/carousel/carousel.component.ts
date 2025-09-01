import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, HostListener, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
 @Input() message: string = '';
@Input() slides: any[] = [

];
  objectKeys = Object.keys;
selected: number = 0;
visibleCards: number = 3; // default desktop

ngOnInit() {
  this.updateVisibleCards();
}

@HostListener('window:resize')
onResize() {
  this.updateVisibleCards();
}

updateVisibleCards() {
  const width = window.innerWidth;
  if (width < 640) {
    this.visibleCards = 1;
  } else if (width < 1024) {
    this.visibleCards = 2;
  } else {
    this.visibleCards = 3;
  }
}

get totalPages(): number {
  return Math.ceil(this.slides.length / this.visibleCards);
}

get currentSlides(): any[] {
  const start = this.selected * this.visibleCards;
  const end = start + this.visibleCards;
  return this.slides.slice(start, end);
}

goToSlide(index: number) {
  if (index < 0) {
    this.selected = this.totalPages - 1;
  } else if (index >= this.totalPages) {
    this.selected = 0;
  } else {
    this.selected = index;
  }
}

ngOnChanges(changes: SimpleChanges): void {
  if (changes['slides']) {
    if (this.selected >= this.totalPages) {
      this.selected = 0;
    }
  }
}

}