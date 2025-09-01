import { Component, Input } from '@angular/core';
import { RequestDemoComponent } from '../request-demo/request-demo.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-section-intro',
  templateUrl: './section-intro.component.html',
  styleUrl: './section-intro.component.scss',
})
export class SectionIntroComponent {
  constructor(private dialog: MatDialog) {}
  @Input() image_path: String = '';
  @Input() title: String = '';
  @Input() subtitle: String = '';

  click() {
    this.dialog.open(RequestDemoComponent, {
      width: '90%', // adjust size
      height: '87%',
    });
  }
}
