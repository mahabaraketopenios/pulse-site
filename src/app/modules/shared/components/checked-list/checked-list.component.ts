import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checked-list',
  templateUrl: './checked-list.component.html',
  styleUrl: './checked-list.component.scss'
})
export class CheckedListComponent {
@Input() mesured :String[]=[]
@Input() mesured2 :String[]=[]
@Input() title1 :string=''
@Input() title2 :string=''
@Input() description1 :string=''
@Input() description2 :string=''
}
