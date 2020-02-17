import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() message: Message;
  @Input() currentUser: string;

  constructor() {}

  isSender(user: string, { from }: Message) {
    console.log(user, from);
    return user === from;
  }

  userInitial(user: string) {
    return user[0].toUpperCase();
  }
}
