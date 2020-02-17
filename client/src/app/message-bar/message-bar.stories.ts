import { MessageBarComponent } from './message-bar.component';
import { action } from '@storybook/addon-actions';
export default {
  title: 'Messagebar',
  excludeStories: /.*Data$/
};

export const actionsData = {
  send: action('send')
};

export const Default = () => ({
  component: MessageBarComponent,
  props: {
    ...actionsData
  }
});
