const redis = require('./redisClient');

const NOTIFICATION_QUEUE = 'notifications';

async function addNotificationToQueue(notification) {
  await redis.lpush(NOTIFICATION_QUEUE, JSON.stringify(notification));
}

async function getNotificationFromQueue() {
  const data = await redis.rpop(NOTIFICATION_QUEUE);
  return data ? JSON.parse(data) : null;
}

module.exports = { addNotificationToQueue, getNotificationFromQueue };
