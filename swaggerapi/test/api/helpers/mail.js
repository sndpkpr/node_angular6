var smtpTransport = require('nodemailer-smtp-transport');
var nodemailer = require('nodemailer');


var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'shoutlocaltest@gmail.com',
        pass: 'password@shout'
    }
});
var mailOptions = {
    to: 'checkchectt@yopmail.com',
    from: 'Shout<shoutlocaltest@gmail.com>',
    subject: 'testSubject',
    html: '<h1>htmlTest</h1><br><h3>h3 tag</h3>'
};
smtpTransport.sendMail(mailOptions, function (err, info) {
    if (err) {
        // if error while sending mail return control with err message
        console.log("Due to following error not able to send mail", "<mark>", err, "</mark>");
    } else if (info) {
        console.log('Message sent: ' + info.response);
    }
});