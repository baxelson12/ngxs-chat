import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MessageComponent } from '../message/message.component';
import { messageData } from '../message/message.stories';
import { MessageBarComponent } from '../message-bar/message-bar.component';
import { actionsData } from '../message-bar/message-bar.stories';

export default {
  title: 'Chatroom',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [MessageComponent, MessageBarComponent],
      imports: [CommonModule]
    })
  ]
};

export const defaultMessagesData = [{}];
