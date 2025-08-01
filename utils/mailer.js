const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendLoginEmail = async (to, subject, text) => {
  await transporter.sendMail({
    from: `"System Alert" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
  });
};
