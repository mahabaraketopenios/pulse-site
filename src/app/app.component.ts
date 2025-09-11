import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { SharedModule } from './modules/shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    /* if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        once: true, // Run only once
        startEvent: 'load', // Trigger when page is fully loaded
        
      });
    } */
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        once: false,
        // duration: 1000,
      });
      AOS.refresh(); // 👈 important
    }
  }
}
