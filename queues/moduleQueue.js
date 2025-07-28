const { Queue } = require('bullmq');
const { redisConfig } = require('../config/redis');

const moduleQueue = new Queue('moduleQueue', { connection: redisConfig });

module.exports = moduleQueue;
