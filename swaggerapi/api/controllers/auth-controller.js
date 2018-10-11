const auth = require("../helpers/auth");
const common = require("../../config/common")

const db = require('../dbModules.js');
const statusCode = common.statusCode

Response = require('../lib/response.js')


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
          return res.json(Response(statusCode.OK, "failed", common.validationMessages.internalError, err));
        } else if (val) {
          let response = { message: "created", err: "no-reponse" };
          return res.json(Response(statusCode.OK, "failed", common.validationMessages.internalError, err));
        } else {
          let response = { message: "mongoErr", err: "no-reponse" };
          return res.json(Response(statusCode.OK, "failed", common.validationMessages.internalError, err));
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
        return res.json(Response(statusCode.OK, "failed", common.validationMessages.internalError, err));
      } else if (!data) {
        let response = { err: "No Data", reply: "Invalid Input" };
        return res.json(Response(statusCode.OK, "failed", common.validationMessages.internalError, err));
      } else if (data) {
        auth.issueToken(data, function (token) {
          let response = { token: token.tokenString, data: data };
          return res.json(Response(statusCode.OK, "failed", common.messages.loginSuccess, response));
        })
      } else {

      }
    })
};

exports.protectedGet = function (req, res, next) {
  let response = { message: "My protected resource for admins and users!" };
  return res.json(Response(statusCode.OK, "failed", common.validationMessages.internalError, err));
};

exports.protected2Get = function (req, res, next) {
  res.writeHead(statusCode.OK, { "Content-Type": "application/json" });
  return res.json(Response(statusCode.OK, "failed", common.validationMessages.internalError, err));
};
