import { MessageComponent } from './message.component';
import { Message } from '../models';
export default {
  title: 'Message',
  excludeStories: /.*Data$/
};

export const messageData: Message = {
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  from: 'baxelson',
  to: 'esnell',
  time: new Date()
};

export const currentUserData = 'baxelson';

export const Default = () => ({
  component: MessageComponent,
  props: {
    message: messageData,
    currentUser: currentUserData
  }
});

export const Sender = () => ({
  component: MessageComponent,
  props: {
    message: messageData,
    currentUser: currentUserData
  }
});

export const Receiver = () => ({
  component: MessageComponent,
  props: {
    message: messageData,
    currentUser: 'naxelson'
  }
});
