var express = require('express');
var router = express.Router();
var path = require('path');
var nodemailer = require('nodemailer');
 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'public', 'index.html'));
});

//ubacio naknadno

//}


router.post('/view1', function(req, res) {
//    console.log(req.body);
    var transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'bojanvidaic@hotmail.com', // Your email id
            pass: '1986engineering' // Your password
        }
    });

//    var text = 'Poruka ce biti poslata';

    var mailOptions = {
        from: 'bojanvidaic@hotmail.com', // sender address
        to: 'bojanvidaic@hotmail.com', // list of receivers
        subject: 'Brief von:  ' + req.body.inputEmail, // Subject line
//        text: req.body.inputMessage //, // plaintext body
         html: '<html><body><h3>Subject:  ' + req.body.inputSubject + 
        '</h3><p>Message:  ' + req.body.inputMessage + 
        '</p><br><p>Name:  ' + req.body.inputName + 
        '</p><p>Email:  ' + req.body.inputEmail + '</p></body></html>'
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

    transporter.sendMail()
        .then(function () {
            console.log("Promise Resolved");
        }).catch(function () {
//            console.log("Promise Rejected");
        });
    
    res.end();
});
// ubacio naknadno
 
module.exports = router;