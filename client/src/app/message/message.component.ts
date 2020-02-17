import { Component, OnInit, Input } from '@angular/core';
import { Message, User } from '../models';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() message: Message;
  @Input() currentUser: User;

  constructor() {}

  isSender({ nickname }: User, { from }: Message) {
    return nickname === from;
  }

  userInitial(name) {
    return name[0].toUpperCase();
  }
}
