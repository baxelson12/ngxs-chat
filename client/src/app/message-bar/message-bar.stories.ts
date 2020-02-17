import { MessageBarComponent } from './message-bar.component';
import { action } from '@storybook/addon-actions';
export default {
  title: 'Messagebar',
  excludeStories: /.*Data$/
};

export const Default = () => ({
  component: MessageBarComponent,
  props: {
    send: action('send')
  }
});
