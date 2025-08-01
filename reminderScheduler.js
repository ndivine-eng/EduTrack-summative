// reminderScheduler.js
const reminderQueue = require('./queues/reminderQueue');
require('dotenv').config();

const reminderData = {
  to: process.env.EMAIL_USER,
 subject: 'Action Required: Submit Your Weekly Report',
  text: `
Hello,

This is a friendly reminder from EduTrack.
Our records show that you have not submitted your weekly activity log.

Please submit your report before Friday 5:00 PM.
If you have already submitted, please ignore this message.

Thank you for your dedication!

EduTrack Notifications
  `,
};

reminderQueue.add(reminderData, {
  delay: 5000, // 5 seconds
  attempts: 3,
}).then(() => {
  console.log('✅ Email reminder scheduled. Will send in 5 seconds.');
});
