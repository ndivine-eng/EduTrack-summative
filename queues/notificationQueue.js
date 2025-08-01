const Queue = require('bull');
require('dotenv').config();

const notificationQueue = new Queue('notificationQueue', process.env.REDIS_URL);

module.exports = { notificationQueue };
