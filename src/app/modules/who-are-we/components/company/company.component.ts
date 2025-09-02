import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestDemoComponent } from '../../../shared/components/request-demo/request-demo.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss',
})
export class CompanyComponent {
  constructor(private dialog: MatDialog) {}
  click() {
    this.dialog.open(RequestDemoComponent, {
      width: '90%', // adjust size
      height: '87%',
    });
  }
}
