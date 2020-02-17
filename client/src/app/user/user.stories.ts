import { UserComponent } from './user.component';
import { User } from '../models';
export default {
  title: 'User',
  excludeStories: /.*Data$/
};

export const userData: User = {
  nickname: 'baxelson12',
  name: 'B rad',
  picture: 'https://avatars3.githubusercontent.com/u/14948219?v=4',
  updated_at: new Date('2020-02-17T00:55:12.929Z'),
  sub: 'github|14948219'
};

export const Selected = () => ({
  component: UserComponent,
  props: {
    user: userData,
    selected: true
  }
});

export const Deselected = () => ({
  component: UserComponent,
  props: {
    user: userData,
    selected: false
  }
});
