import { Component } from '@angular/core';
import { RequestDemoComponent } from '../request-demo/request-demo.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

interface FooterItem {
  label: string;
  path: string;
  isButton?: boolean;
  motif?: boolean;
}

interface FooterColumn {
  title: string;
  items: FooterItem[];
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  footerColumns: FooterColumn[] = [
    {
      title: 'Pulse One Solution',
      items: [
        /* { label: 'Our Solution', path: '/solution' }, */
        {
          label: 'Assessment Projects',
          path: 'what-we-do/solution/assessment-projects',
        },
        {
          label: 'Course Evaluations & Surveys',
          path: 'what-we-do/solution/course-evaluation',
        },
        {
          label: 'Curriculum Strategy',
          path: 'what-we-do//solution/curriculum-evaluation',
        },
        /*  {
          label: 'Faculty Success',
          action: () => this.onClick('Faculty Success'),
        }, */
        {
          label: 'Planning & Self-Study',
          path: 'what-we-do//solution/planing-self-study',
        },
        {
          label: 'Student Learning Experience',
          path: 'what-we-do//solution/student-learning-experience',
        },
        {
          label: 'Student Success & Engagement',
          path: 'what-we-do/solution/student-sucess-and-engagement',
        },
      ],
    },
    {
      title: 'About',
      items: [
        {
          label: 'About Pulse One',
          path: '',
        },
        {
          label: 'Legal Resources',
          path: '',
        },
        { label: 'Join Our Team', path: '' },
        { label: 'Events', path: '' },
        { label: 'Press', path: '' },
        { label: 'Resources', path: '' },
        { label: 'AWS Hosting', path: '' },
      ],
    },
    {
      title: 'Connect',
      items: [
        { label: 'Sign In', path: '' },
        { label: 'Get Support', path: '' },
        { label: 'Contact Us', path: '/who-are-we/contact-us' },
        {
          label: 'Request Demo',
          path: '',
          isButton: true,
          motif: true,
        }, // <-- distinct
      ],
    },
  ];
  constructor(private dialog: MatDialog, private router: Router) {}
  onClick(label: string) {
    console.log('Clicked:', label);
    if (label) {
      this.router.navigate([`${label}`]);
    }
    // Add routing, modal, or any action here
  }
  click() {
    this.dialog.open(RequestDemoComponent, {
      width: '90%', // adjust size
      height: '87%',
    });
  }
}