import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
mobileMenuOpen = false;
  
  menuItems = [
    {
      title: 'What we do',
      children: ['Services', 'Solutions', 'Industries'],
      expanded: false
    },
    {
      title: 'Who we serve',
      children: ['Clients', 'Partners', 'Industries'],
      expanded: false
    },
    {
      title: 'Resources',
      children: ['Blog', 'Whitepapers', 'Case Studies'],
      expanded: false
    },
    {
      title: 'Who we are',
      children: ['About Us', 'Team', 'Careers'],
      expanded: false
    },
    {
      title: 'For our clients',
      children: ['Portal', 'Support', 'Contact'],
      expanded: false
    }
  ];

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleSubMenu(item: any) {
    item.expanded = !item.expanded;
  }

  click(){
    console.log("meeting")
  }

  


}
