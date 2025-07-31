const { getNotificationFromQueue } = require('../queues/notificationQueue');

async function processNotifications() {
  console.log(' Notification processor started...');
  while (true) {
    const notification = await getNotificationFromQueue();
    if (notification) {
      console.log(' Processing notification:', notification);

      // Here you can:
      // - Send email
      // - Log to file
      // - Alert manager etc.
    } else {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // wait 2 seconds if no task
    }
  }
}

processNotifications();
