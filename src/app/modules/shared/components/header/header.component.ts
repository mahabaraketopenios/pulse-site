import {
  Component,
  HostBinding,
  HostListener,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  mobileMenuOpen = false;
  constructor(private router: Router, private eRef: ElementRef) {}
  @ViewChild('menuContainer') menuContainer!: ElementRef;

  menuItems = [
    {
      title: 'What we do',
      children: {
        solution: [
          {
            label: 'Assessment and improvment Projects',
            path: 'assessment-projects',
            iSsolution: true,
          },
          {
            label: 'Course Evaluation and improvment',
            path: 'course-evaluation',
            iSsolution: true,
          },
          /* {
            label: 'Sychnonus mulitilevel surveys monitoring',
            path: 'surveys-monitoring',
            iSsolution: true,
          }, */
          {
            label: 'Curriculum evaluation and update strategy',
            path: 'curriculum-evaluation',
            iSsolution: true,
          },
          {
            label: 'Faculty perfomance boost',
            path: 'faculty-perfomance',
            iSsolution: true,
          },
          /* {
            label: 'Accreditation and SSR',
            path: 'accredition',
            iSsolution: true,
          }, */
          {
            label: 'Planning & Self-Study',
            path: 'planing-self-study',
            iSsolution: true,
          },
          {
            label: 'Student learning experience',
            path: 'student-learning-experience',
            iSsolution: true,
          },
          {
            label: 'Student  success and engagement',
            path: 'student-sucess-and-engagement',
            iSsolution: true,
          },
        ],
        use_case: [
          {
            label: 'Accreditation',
            path: 'accreditation',
            iSUse: true,
          },
          {
            label: 'Assessment ',
            path: 'assessment',
            iSUse: true,
          },
          {
            label: 'continuous improvement ',
            path: 'continuous-improvement',
            iSUse: true,
          },
          {
            label: 'Educaional development ',
            path: 'educational-development',
            iSUse: true,
          },
          {
            label: 'Student success',
            path: 'student-success',
            iSUse: true,
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
    console.log(this.mobileMenuOpen);
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
    if (subItem.iSsolution) {
      console.log(subItem);

      this.router.navigate([`what-we-do/solution/${subItem.path}`]);
    } else if (subItem.iSUse) {
      this.router.navigate([`what-we-do/use-case/${subItem.path}`]);
    }
  }
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (
      this.menuContainer &&
      !this.menuContainer.nativeElement.contains(event.target)
    ) {
      this.closeAllMenus();
    }
  }

  closeAllMenus(): void {
    if (!this.mobileMenuOpen) {
      this.menuItems.forEach((item) => {
        item.expanded = false;
      });
    }
  }
}
