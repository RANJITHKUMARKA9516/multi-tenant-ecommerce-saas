const nodemailer = require("nodemailer");

const sendOrderEmail = async (email, order) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,

    to: email,

    subject: "Order Confirmation",

    html: `
      <h2>Order Confirmed</h2>

      <p>Order ID:
      ${order._id}</p>

      <p>Total:
      ₹${order.totalAmount}</p>

      <p>Status:
      ${order.status}</p>
    `,
  });
};

module.exports = sendOrderEmail;
