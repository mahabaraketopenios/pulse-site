import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-intro',
  templateUrl: './section-intro.component.html',
  styleUrl: './section-intro.component.scss'
})
export class SectionIntroComponent {
@Input() image_path :String=''
@Input() title :String =''
@Input() subtitle :String =''
}
