const smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require('nodemailer');

const from = 'Shout<shoutlocaltest@gmail.com>'
const smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'shoutlocaltest@gmail.com',
        pass: 'password@shout'
    }
});

/* @function  : generateTemplate
 *  @created  : 09-Oct-2018
 *  @modified :
 *  @purpose  : Send Email
 *  @reason   : Reason for sending email (log this in logger)
 */
exports.sendmail = function (reason, to, mailSubject, message) {
    const mailOptions = {
        to: to,
        from: from,
        subject: mailSubject,
        html: message
    };
    smtpTransport.sendMail(mailOptions, function (err, info) {
        if (err) {
            // if error while sending mail return control with err message
        } else if (info) {
            // console.log('Message sent: ' + info.response);
        }
    });
}