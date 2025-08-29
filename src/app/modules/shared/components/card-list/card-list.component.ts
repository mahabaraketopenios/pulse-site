import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  objectKeys = Object.keys;
  @Input()list :any[]=[]
    @Input()title :string =''
}
