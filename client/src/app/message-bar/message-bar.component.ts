import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.scss']
})
export class MessageBarComponent {
  @Output() send: EventEmitter<any> = new EventEmitter();

  onSend() {
    this.send.emit('Sent!');
  }
}
