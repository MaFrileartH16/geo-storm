import { Head } from '@inertiajs/react';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useEffect } from 'react';

export const AppLayout = (props) => {
  useEffect(() => {
    if (props.notification) {
      notifications.show({
        withBorder: true,
        message: props.notification.message,
        color: props.notification.status === 'success' ? 'green' : 'red',
        icon:
          props.notification.status === 'success' ? <IconCheck /> : <IconX />,
      });
    }

    notifications.cleanQueue();
  }, [props.notification]);

  return (
    <>
      <Head title={props.title} />

      {props.children}
    </>
  );
};
