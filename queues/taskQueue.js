// queues/taskQueue.js

const Queue = require('bull');
const taskQueue = new Queue('activityTasks', 'redis://127.0.0.1:6379');

module.exports = taskQueue;
