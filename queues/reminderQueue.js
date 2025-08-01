// reminderQueue.js
const Queue = require('bull');
require('dotenv').config();

const reminderQueue = new Queue('email-reminder-queue', {
  redis: {
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: parseInt(process.env.REDIS_PORT) || 6379,
  },
});

reminderQueue.on('error', (err) => {
  console.error('❌ Redis connection failed:', err);
});

reminderQueue.on('ready', () => {
  console.log('✅ Connected to Redis for reminderQueue');
});

module.exports = reminderQueue;
