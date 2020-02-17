import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { User, Message } from '../models';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent implements OnInit {
  @Input() user: User;
  @Input() messages: Message[];
  @Output() sendMessage = new EventEmitter();

  onSend() {
    this.sendMessage.emit();
  }

  constructor() {}
  ngOnInit() {
    console.log(this.messages);
  }
}
