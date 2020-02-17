import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MessageContainerComponent } from './message-container.component';
import { MessageComponent } from '../message/message.component';
import {
  messageData,
  currentUserData
} from '../message/message.stories';
import { MessageBarComponent } from '../message-bar/message-bar.component';
import { messageBarActionsData } from '../message-bar/message-bar.stories';
import { User, Message } from '../models';

export default {
  title: 'Chatroom',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [
        MessageComponent,
        MessageBarComponent,
        MessageContainerComponent
      ],
      imports: [CommonModule]
    })
  ]
};

export const messagesData: Message[] = [
  {
    ...messageData,
    content: `He said he was not there yesterday; however, many people saw him there.`
  },
  {
    ...messageData,
    content: `Twin 4-month-olds slept in the shade of the palm tree while the mother tanned in the sun.`
  },
  {
    ...messageData,
    from: 'esnell',
    to: 'baxelson12',
    content: `I just wanted to tell you I could see the love you have for your child by the way you look at her.`
  },
  {
    ...messageData,
    content: `Eating eggs on Thursday for choir practice was recommended.`
  },
  {
    ...messageData,
    from: 'esnell',
    to: 'baxelson12',
    content: `Even though he thought the world was flat he didn’t see the irony of wanting to travel around the world.`
  },
  {
    ...messageData,
    from: 'esnell',
    to: 'baxelson12',
    content: `Please wait outside of the house.`
  },
  {
    ...messageData,
    content: `The fish listened intently to what the frogs had to say.`
  },
  {
    ...messageData,
    content: `Andy loved to sleep on a bed of nails.`
  },
  {
    ...messageData,
    content: `I am happy to take your donation; any amount will be greatly appreciated.`
  }
];

export const messageContainerActionsData = {
  sendMessage: messageBarActionsData.send
};

export const userData: User = currentUserData;

export const Default = () => ({
  component: MessageContainerComponent,
  template: `
    <div class="p-4 bg-gray-300 flex" style="height: 500px">
      <app-message-container
        class="bg-white rounded-lg m-4"
        [user]="user"
        [messages]="messages"
        (sendMessage)="sendMessage()">
      </app-message-container>
    </div>
      `,
  props: {
    user: userData,
    messages: messagesData,
    sendMessage: messageContainerActionsData.sendMessage
  }
});
