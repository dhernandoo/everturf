var nodemailer = require('nodemailer');

module.exports = {
    sendContact: (req, res, next) => {
        
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: '', // Your email id
                pass: '' // Your password
            }
        });

        var text = 'Hello world from \n\n' + req.body.first_name;

        var mailOptions = {
            from: 'example@gmail.com>', // sender address
            to: '', // list of receivers
            subject: 'Email Example', // Subject line
            text: text //, // plaintext body
            // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
        };

        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
                res.json({yo: 'error'});
            }else{
                console.log('Message sent: ' + info.response);
                res.json({yo: info.response});
            };
        });
    }
}