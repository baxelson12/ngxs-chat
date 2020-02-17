import { MessageComponent } from './message.component';
import { Message, User } from '../models';
export default {
  title: 'Message',
  excludeStories: /.*Data$/
};

export const messageData: Message = {
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  from: 'baxelson12',
  to: 'esnell',
  time: new Date()
};

export const currentUserData: User = {
  nickname: 'baxelson12',
  name: 'B rad',
  picture: 'https://avatars3.githubusercontent.com/u/14948219?v=4',
  updated_at: new Date('2020-02-17T00:55:12.929Z'),
  sub: 'github|14948219'
};

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
    currentUser: {
      ...currentUserData,
      nickname: 'naxelson'
    }
  }
});
