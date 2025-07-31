const taskQueue = require('./queues/taskQueue');

taskQueue.process(async (job) => {
  console.log(` Processing notification: ${job.data.message}`);

  // Example logic:
  if (job.data.type === 'log_submitted') {
    console.log(`Send email/alert to manager: Facilitator ${job.data.facilitatorId} submitted a log`);
  }

  if (job.data.type === 'log_updated') {
    console.log(`Send email/alert to manager: Facilitator ${job.data.facilitatorId} updated a log`);
  }

  return Promise.resolve();
});
