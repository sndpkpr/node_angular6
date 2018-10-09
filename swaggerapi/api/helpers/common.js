var crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');
/**
 * [encryptText - encrypt string]
 * @param  {Object}
 * @return {Object}
 */
exports.encryptText = function(text) {
    var cipher = crypto.createCipher('aes-256-ctr', 'Co113Ct1v98'); //(algorithm,password)
    var crypted = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

/**
 * [decryptText - decrypt string]
 * @param  {Object}
 * @param  {Object}
 * @return {Object}
 */
exports.decryptText = function(text, callback) {
    var decipher = crypto.createDecipher('aes-256-ctr', 'Co113Ct1v98');
    var dec = decipher.update(text, 'hex', 'utf8'); //update(Buffer(text, 'hex','utf8'));
    dec += decipher.final('utf8');
    return callback(null, dec);
};

/**
 * [generateHash - password encrypt]
 * @param  {Object}
 * @return {Object}
 */
exports.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

/**
 * [validPassword - to match password]
 * @param  {Object}
 * @param  {Object}
 * @return {Object}
 */
exports.validPassword = function(password, comprPassword) {
    return bcrypt.compareSync(password, comprPassword);
}