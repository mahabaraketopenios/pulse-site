import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  mobileMenuOpen = false;

  menuItems = [
    {
      title: 'What we do',
      children: ['Services', 'Solutions', 'Industries'],
      expanded: false,
    },
    {
      title: 'Who we serve',
      children: ['Clients', 'Partners', 'Industries'],
      expanded: false,
    },
    {
      title: 'Resources',
      children: ['Blog', 'Whitepapers', 'Case Studies'],
      expanded: false,
    },
    {
      title: 'Who we are',
      children: ['About Us', 'Team', 'Careers'],
      expanded: false,
    },
    {
      title: 'For our clients',
      children: ['Portal', 'Support', 'Contact'],
      expanded: false,
    },
  ];

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleSubMenu(item: any) {
    item.expanded = !item.expanded;
  }

  click() {
    console.log('meeting');
  }
  /*   private lastScroll = 0;

  @HostBinding('class.visible') isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > 0 && currentScroll > this.lastScroll) {
      // Scrolling down beyond 100px -> show header
      this.isVisible = true;
    } else if (currentScroll < this.lastScroll) {
      // Scrolling up -> hide header
      this.isVisible = false;
    }
    if (currentScroll === 0 || currentScroll < 100) {
      // At the top of the page -> show header
      this.isVisible = false;
    }
    this.lastScroll = currentScroll;
  } */
}
