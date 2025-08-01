// worker.js
const taskQueue = require('./queues/taskQueue');

console.log('Worker started: Listening for notification jobs...');

taskQueue.process(async (job) => {
  try {
    const { type, facilitatorId, message } = job.data;

    // Simulate sending notification (replace with real service e.g., email, SMS)
    console.log(`[${type.toUpperCase()}] Notification for Facilitator ${facilitatorId}: ${message}`);

    // Here you can integrate email/SMS API calls, push notifications, etc.
    // For example:
    // await emailService.sendNotification(facilitatorId, message);

    return Promise.resolve();
  } catch (error) {
    console.error('Error processing job:', error);
    return Promise.reject(error);
  }
});
