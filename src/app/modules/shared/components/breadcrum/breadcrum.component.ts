import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs';

@Component({
  selector: 'app-breadcrum',
  templateUrl: './breadcrum.component.html',
  styleUrl: './breadcrum.component.scss',
})
export class BreadcrumComponent implements OnInit {
  breadcrumbParts: string[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // ✅ initialize immediately
    this.updateBreadcrumb(this.router.url);

    // ✅ then listen for future navigations
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.updateBreadcrumb(event.urlAfterRedirects);
      });
  }

  private updateBreadcrumb(url: string) {
    const urlSegments = url.split('/').filter(Boolean);
     this.breadcrumbParts = urlSegments
       .slice(-2)
       .map((segment) => segment.replace(/-/g, ' '));
  }
  getLink(index: number) {
  // Build path up to this segment
 
  return ['/what-we-do', ...this.breadcrumbParts.slice(0, index + 1)];
}
}
