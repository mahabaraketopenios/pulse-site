import { Component, HostBinding, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  mobileMenuOpen = false;
  constructor(private router: Router) {}

  menuItems = [
    {
      title: 'What we do',
      children: [
        { label: 'Assessment and improvment Projects', id: 'w1' },
        { label: 'Course Evaluation and improvment', id: 'w2' },
        { label: 'Sychnonus mulitilevel surveys monitoring', id: 'w3' },
        { label: 'Curriculum evaluation and update strategy', id: 'w4' },
        { label: 'Faculty perfomance boost', id: 'w5' },
        { label: 'Accreditation and SSR', id: 'w6' },
        { label: 'Student learning , success and engagement', id: 'w6' },
      ],
      expanded: false,
    },
    {
      title: 'Who we serve',
      children: [
        { label: 'Clients', id: 'ws1' },
        { label: 'Partners', id: 'ws2' },
        { label: 'Industries', id: 'ws3' },
      ],
      expanded: false,
    },
    {
      title: 'Resources',
      children: [
        { label: 'Blog', id: 'r1' },
        { label: 'Whitepapers', id: 'r2' },
        { label: 'Case Studies', id: 'r3' },
      ],
      expanded: false,
    },
    {
      title: 'Who we are',
      children: [
        { label: 'About Us', id: 'ww1' },
        { label: 'Team', id: 'ww2' },
        { label: 'Careers', id: 'ww3' },
      ],
      expanded: false,
    },
    {
      title: 'For our clients',
      children: [
        { label: 'Portal', id: 'c1' },
        { label: 'Support', id: 'c2' },
        { label: 'Contact', id: 'c3' },
      ],
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
    /*  (window as any).Calendly.initPopupWidget({
       url: 'https://calendly.com/mahabaraket-openios',
     }); */
  }
  toggleItem(item: any, allItems: any[]) {
    allItems.forEach((i) => {
      if (i !== item) {
        i.expanded = false;
      }
    });

    item.expanded = !item.expanded;
  }
  clicked(subItem: any) {
    console.log(subItem);
    switch (subItem) {
      case 'w1':
        this.router.navigate(['what-we-do/solution/assessment-projects']);
        break;
      case 'w2':
        this.router.navigate(['what-we-do/solution/course-evaluation']);
        break;
      case 'w3':
        this.router.navigate(['what-we-do/solution/surveys-monitoring']);
        break;
      // add more cases as needed
      default:
        console.log('Unknown submenu:', subItem);
    }
  }
}