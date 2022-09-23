const nodemailer = require('nodemailer');
 
 
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'xyz@gmail.com', // enter your email
        pass: '*************'  // enter your email password
    }
});
 
let mailDetails = {
    from: 'xyz@gmail.com', // enter your email
    to: 'abc@gmail.com', // enter the email of the receiver
    subject: 'Test mail',
    text: 'Node.js testing mail '
};
 
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
});

// in the console run $ email-sender.js