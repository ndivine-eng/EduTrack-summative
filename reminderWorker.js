// reminderWorker.js
const reminderQueue = require('./queues/reminderQueue');
const sendEmail = require('./utils/sendEmail');
require('dotenv').config();

console.log('👷 Worker started...');

reminderQueue.process(async (job) => {
  console.log('📩 Processing job:', job.data);

  const { to, subject, text } = job.data;
  try {
    await sendEmail(to, subject, text);
    console.log(`✅ Job done for ${to}`);
  } catch (error) {
    console.error('❌ Failed to process job:', error);
    throw error;
  }
});
