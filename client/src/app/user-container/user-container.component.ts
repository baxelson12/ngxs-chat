import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { User } from '../models';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent {
  @Input() users: User[];
  @Input() selected: User;
  @Output() changeRoom: EventEmitter<User> = new EventEmitter();

  isSelected(user: User, selected: User) {
    return user.nickname === selected.nickname;
  }

  select(user: User) {
    this.changeRoom.emit(user);
  }
}
