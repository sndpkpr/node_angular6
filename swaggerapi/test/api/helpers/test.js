var jwt = require('jsonwebtoken');
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
var payload = {
    data1: "Data 1",
    data2: "Data 2",
    data3: "Data 3",
    data4: "Data 4",
};


var i = 'Mysoft corp';
var s = 'some@user.com';
var a = 'http://mysoftcorp.in';

var signOptions = {
    algorithm: "HS512",
    audience: a,
    issuer: i,
    subject: s, 
    expiresIn: "12h",
};


var token = jwt.sign(payload, 'privateKEY', signOptions);
console.log('000000TOKEN', token)
var legit = jwt.verify(token, 'privateKEY', signOptions);
console.log('000000VLE', legit)
