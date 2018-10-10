const auth = require("../helpers/auth");
const common = require("../../config/common")

const db = require('../dbModules.js');
const statusCode = common.statusCode


exports.newUser = function (req, res, next) {
  let data = req.body
  const query = { roleName: 'User' }
  db.roles.findOne(query).lean().exec(function (err, role) {
    if (role) {
      data.role_id = role._id;
      const saveData = new db.users(data);
      saveData.save(function (err, val) {
        if (err) {
          let response = { message: "mongoErr", err: err };
          res.writeHead(statusCode.BadRequest, { "Content-Type": "application/json" });
          return res.end(JSON.stringify(response));
        } else if (val) {
          let response = { message: "created", err: "no-reponse" };
          res.writeHead(statusCode.OK, { "Content-Type": "application/json" });
          return res.end(JSON.stringify(response));
        } else {
          let response = { message: "mongoErr", err: "no-reponse" };
          res.writeHead(statusCode.NoContent, { "Content-Type": "application/json" });
          return res.end(JSON.stringify(response));
        }
      })
    } else {

    }
  })
};

exports.login = function (req, res, next) {
  const data = req.body
  const query = {
    email: data.username,
    password: data.password,
  }
  const projection = { _id: 1, email: 1 }

  db.users.findOne(query, projection)
    .populate('role_id')
    .lean()
    .exec(function (err, data) {
      if (err) {
        let response = { err: "Mongo Err", reply: "Invalid Input" };
        res.writeHead(statusCode.NotAcceptable, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(response));
      } else if (!data) {
        let response = { err: "No Data", reply: "Invalid Input" };
        res.writeHead(statusCode.NotAcceptable, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(response));
      } else if (data) {
        const tokenString = auth.issueToken(data);
        let response = { token: tokenString, data: data };
        res.writeHead(statusCode.OK, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(response));
      } else {

      }
    })
};




exports.protectedGet = function (req, res, next) {
  let response = { message: "My protected resource for admins and users!" };
  res.writeHead(statusCode.OK, { "Content-Type": "application/json" });
  return res.end(JSON.stringify(response));
};

exports.protected2Get = function (req, res, next) {
  let response = { message: "My protected resource for admins!" };
  res.writeHead(statusCode.OK, { "Content-Type": "application/json" });
  return res.end(JSON.stringify(response));
};
