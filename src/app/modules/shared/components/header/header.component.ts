import {
  Component,
  HostBinding,
  HostListener,
  ChangeDetectorRef,
} from '@angular/core';
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
      children: {
        solution: [
          {
            label: 'Assessment and improvment Projects',
            path: 'assessment-projects',
          },
          {
            label: 'Course Evaluation and improvment',
            path: 'course-evaluation',
          },
          {
            label: 'Sychnonus mulitilevel surveys monitoring',
            path: 'surveys-monitoring',
          },
          {
            label: 'Curriculum evaluation and update strategy',
            path: 'curriculum-evaluation',
          },
          { label: 'Faculty perfomance boost', path: 'faculty-perfomance' },
          { label: 'Accreditation and SSR', path: 'accredition' },
          {
            label: 'Student learning , success and engagement',
            path: 'student-learning',
          },
        ],
        use_case: [
          {
            label: 'Assessment and improvment Projects',
            path: 'assessment-projects',
          },
          {
            label: 'Course Evaluation and improvment',
            path: 'course-evaluation',
          },
        ],
      },
      expanded: false,
    },
    {
      title: 'Who we serve',
      children: [
        { label: 'Clients', path: 'ws1' },
        { label: 'Partners', path: 'ws2' },
        { label: 'Industries', path: 'ws3' },
      ],
      expanded: false,
    },
    {
      title: 'Resources',
      children: [
        { label: 'Blog', path: 'r1' },
        { label: 'Whitepapers', path: 'r2' },
        { label: 'Case Studies', path: 'r3' },
      ],
      expanded: false,
    },
    {
      title: 'Who we are',
      children: [
        { label: 'About Us', path: 'ww1' },
        { label: 'Team', path: 'ww2' },
        { label: 'Careers', path: 'ww3' },
      ],
      expanded: false,
    },
    {
      title: 'For our clients',
      children: [
        { label: 'Portal', path: 'c1' },
        { label: 'Support', path: 'c2' },
        { label: 'Contact', path: 'c3' },
      ],
      expanded: false,
    },
  ];
  getSolutions(item: any) {
    return item.children.solution || [];
  }

  getUseCases(item: any) {
    return item.children.use_case || [];
  }
  getchildren(item: any) {
    return item.children || [];
  }
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

    this.router.navigate([`what-we-do/solution/${subItem}`]);
  }
}
