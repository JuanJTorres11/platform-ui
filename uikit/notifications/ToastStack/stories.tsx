import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ToastStack from '.';
import { NOTIFICATION_VARIANTS } from '../Notification';

const ToastStackStories = storiesOf(`${__dirname}`, module).add('Basic', () => {
  const [stack, setStack] = React.useState([
    {
      id: String(Math.random()),
      variant: NOTIFICATION_VARIANTS.SUCCESS,
      title: 'Hipster Ipsum',
      content:
        'Tilde gentrify single-origin coffee lo-fi roof party twee. Chillwave stumptown street art four dollar toast literally cred artisan',
    },
    {
      id: String(Math.random()),
      variant: NOTIFICATION_VARIANTS.WARNING,
      title: 'Hipster Ipsum',
      content: 'Cold-pressed beard narwhal ennui',
    },
    {
      id: String(Math.random()),
      variant: NOTIFICATION_VARIANTS.ERROR,
      title: 'Hipster Ipsum',
      content:
        'Thundercats la croix microdosing shoreditch, green juice VHS YOLO taxidermy adaptogen literally',
    },
  ]);

  const onInteraction = data => {
    const { id } = data;
    setStack(stack.filter(({ id: _id }) => id !== _id));
    action('onInteraction')(data);
  };
  return (
    <ToastStack
      onInteraction={onInteraction}
      toastConfigs={[
        {
          id: String(Math.random()),
          variant: NOTIFICATION_VARIANTS.SUCCESS,
          title: 'Hipster Ipsum',
          content:
            'Tilde gentrify single-origin coffee lo-fi roof party twee. Chillwave stumptown street art four dollar toast literally cred artisan',
        },
        {
          id: String(Math.random()),
          variant: NOTIFICATION_VARIANTS.WARNING,
          title: 'Hipster Ipsum',
          content: 'Cold-pressed beard narwhal ennui',
        },
        {
          id: String(Math.random()),
          variant: NOTIFICATION_VARIANTS.ERROR,
          title: 'Hipster Ipsum',
          content:
            'Thundercats la croix microdosing shoreditch, green juice VHS YOLO taxidermy adaptogen literally',
        },
      ]}
    />
  );
});

export default ToastStackStories;
