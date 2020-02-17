import { Component } from '@angular/core';
import { User } from './models';

export const userData: User = {
  nickname: 'baxelson12',
  name: 'B rad',
  picture: 'https://avatars3.githubusercontent.com/u/14948219?v=4',
  updated_at: new Date('2020-02-17T00:55:12.929Z'),
  sub: 'github|14948219'
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
    name: 'Alva Dickson'
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: User[] = usersData;
  user: User = userData;
}
