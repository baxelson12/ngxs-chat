import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { CommonModule } from '@angular/common';
import { UserContainerComponent } from './user-container.component';
import { UserComponent } from '../user/user.component';
import { userData } from '../user/user.stories';
import { User } from '../models';

export default {
  title: 'Users sidebar',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [UserComponent, UserContainerComponent],
      imports: [CommonModule]
    })
  ]
};

export const userContainerActions = {
  changeRoom: action('changeRoom')
};

export const usersData: User[] = [
  { ...userData, name: 'Delbert Krueger', nickname: 'exposehalo' },
  { ...userData, name: 'Phoebe Ho', nickname: 'sequencemethods' },
  {
    ...userData,
    name: 'Bonnie Mcintyre',
    nickname: 'ceciliaaberrant'
  },
  {
    ...userData,
    name: 'Alva Dickson',
    nickname: 'generationsymbolic'
  },
  {
    ...userData,
    name: 'Herbert Kane',
    nickname: 'frictionunselfish'
  },
  {
    ...userData,
    name: 'Jerry Livingston',
    nickname: 'fetchunwieldy'
  },
  { ...userData, name: 'Pam Reese', nickname: 'sinkgolfer' },
  { ...userData, name: 'Deirdre Cross', nickname: 'adapterevil' }
];

export const Default = () => ({
  component: UserContainerComponent,
  template: `
    <div class="my-2 mx-64 bg-blue-200 flex overflow-y-auto" style="height: 500px">
        <app-user-container class="flex-grow" (changeRoom)="changeRoom($event)" [users]="users" [selected]="selected">
        </app-user-container>
    </div>
    `,
  props: {
    users: usersData,
    selected: usersData[3],
    changeRoom: userContainerActions.changeRoom
  }
});
