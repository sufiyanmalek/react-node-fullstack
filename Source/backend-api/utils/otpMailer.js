import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
export async function otpMailer(userEmail, Data) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.mailtest.radixweb.net",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "testdotnet@mailtest.radixweb.net", // generated ethereal user
      pass: "Radix@web#8", // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "testdotnet@mailtest.radixweb.net", // sender address
    to: userEmail, // list of receivers
    subject: "User Login Successfull", // Subject line
    text: ``, // plain text body
    html: `Your login otp is : ${Data}
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
