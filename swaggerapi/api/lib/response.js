/**
* This file is meant for giving the custom errors
* params @status | @message | @description
*/

module.exports = function (code, status, message, data, token) {
    let response = {
        code: code,
        status: status,
        message: message,
        data: data
    };
    return response;
}