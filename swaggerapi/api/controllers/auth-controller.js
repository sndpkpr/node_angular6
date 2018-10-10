const auth = require("../helpers/auth");
const common = require("../../config/common")

const modules = require('../modules.js');
const statusCode = common.statusCode

exports.newUser = function(req, res, next) {
  const data = req.body

  const query = { email: data.email }
  const update = {
    firstName : data.firstName,
    lastName : data.lastName,
    email : data.email,
    dob : data.dob,
    password : data.password
  }
  options = { upsert: true }

  modules.users.update(query, update, options)
  .exec(function(err, data){
    if (err) {
      let response = { message:"mongoErr", err: err };
      res.writeHead(statusCode.BadRequest, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(response));
    } else if (data) {
      let response = { message: data, err: "no-reponse" };
      res.writeHead(statusCode.OK, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(response));
    } else {
      let response = { message: "mongoErr", err: "no-reponse" };
      res.writeHead(statusCode.NoContent, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(response));
    }
  })
};

exports.login = function(req, res, next) {
  const data = req.body
  const username = data.username;
  const password = data.password;
  
  const query = {
    username : data.username,
    password : data.password,
  }
  options = { upsert: true }

  modules.users.findOne(query, projection)
  .exec(function(err,data){

  })


  if(username == 'admin@hycarebrid.com' &&  password == '12345678') {
    const tokenString = auth.issueToken(data);
    let response = { token: tokenString, admin:"" };
    res.writeHead(statusCode.OK, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(response));
  } else if (username && password) {
    const tokenString = auth.issueToken(data);
    let response = { token: tokenString, user:"" };
    res.writeHead(statusCode.OK, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(response));
  } else {
    let response = { reply: "Invalid Input" };
    res.writeHead(statusCode.NotAcceptable, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(response));
  }
};

exports.protectedGet = function(req, res, next) {
  let response = { message: "My protected resource for admins and users!" };
  res.writeHead(statusCode.OK, { "Content-Type": "application/json" });
  return res.end(JSON.stringify(response));
};

exports.protected2Get = function(req, res, next) {
  let response = { message: "My protected resource for admins!" };
  res.writeHead(statusCode.OK, { "Content-Type": "application/json" });
  return res.end(JSON.stringify(response));
};
