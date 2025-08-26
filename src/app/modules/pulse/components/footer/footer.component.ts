import { Component } from '@angular/core';
interface FooterItem {
  label: string;
  action?: () => void;
  isButton?: boolean;
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
        { label: 'Our Solution', action: () => this.onClick('Our Solution') },
        {
          label: 'Assessment Projects',
          action: () => this.onClick('Assessment Projects'),
        },
        {
          label: 'Course Evaluations & Surveys',
          action: () => this.onClick('Course Evaluations & Surveys'),
        },
        {
          label: 'Curriculum Strategy',
          action: () => this.onClick('Curriculum Strategy'),
        },
        {
          label: 'Faculty Success',
          action: () => this.onClick('Faculty Success'),
        },
        {
          label: 'Planning & Self-Study',
          action: () => this.onClick('Planning & Self-Study'),
        },
        {
          label: 'Student Learning & Licensure',
          action: () => this.onClick('Student Learning & Licensure'),
        },
        {
          label: 'Student Success & Engagement',
          action: () => this.onClick('Student Success & Engagement'),
        },
      ],
    },
    {
      title: 'About',
      items: [
        {
          label: 'About Pulse One',
          action: () => this.onClick('About Pulse One'),
        },
        {
          label: 'Legal Resources',
          action: () => this.onClick('Legal Resources'),
        },
        { label: 'Join Our Team', action: () => this.onClick('Join Our Team') },
        { label: 'Events', action: () => this.onClick('Events') },
        { label: 'Press', action: () => this.onClick('Press') },
        { label: 'Resources', action: () => this.onClick('Resources') },
        { label: 'AWS Hosting', action: () => this.onClick('AWS Hosting') },
      ],
    },
    {
      title: 'Connect',
      items: [
        { label: 'Sign In', action: () => this.onClick('Sign In') },
        { label: 'Get Support', action: () => this.onClick('Get Support') },
        { label: 'Contact Us', action: () => this.onClick('Contact Us') },
        {
          label: 'Request Demo',
          action: () => this.onClick('Request Demo'),
          isButton: true,
        }, // <-- distinct
      ],
    },
  ];

  onClick(label: string) {
    console.log('Clicked:', label);
    // Add routing, modal, or any action here
  }
}