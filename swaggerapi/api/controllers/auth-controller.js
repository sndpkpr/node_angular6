const auth = require("../helpers/auth");

exports.newUser = function(req, res, next) {
  console.log(req.body)
  let response = { message: "My resource!" };
  res.writeHead(200, { "Content-Type": "application/json" });
  return res.end(JSON.stringify(response));
};

exports.login = function(req, res, next) {
  const data = req.body
  const username = data.username;
  const password = data.password;
  
  if(username == 'admin@hycarebrid.com' &&  password == '12345678') {
    const tokenString = auth.issueToken(data);
    let response = { token: tokenString, admin:"" };
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(response));
  } else if (username && password) {
    const tokenString = auth.issueToken(data);
    let response = { token: tokenString, user:"" };
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(response));
  } else {
    let response = { reply: "Invalid Input" };
    res.writeHead(406, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(response));
  }
};

exports.protectedGet = function(req, res, next) {
  let response = { message: "My protected resource for admins and users!" };
  res.writeHead(200, { "Content-Type": "application/json" });
  return res.end(JSON.stringify(response));
};

exports.protected2Get = function(req, res, next) {
  let response = { message: "My protected resource for admins!" };
  res.writeHead(200, { "Content-Type": "application/json" });
  return res.end(JSON.stringify(response));
};
