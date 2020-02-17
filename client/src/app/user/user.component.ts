import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: User;
  @Input() selected: boolean;

  userInitial(name: string) {
    return name[0].toUpperCase();
  }
}
