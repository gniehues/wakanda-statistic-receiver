'use strict'

var CryptoJS = require("crypto-js");
var bytes = require('bytes');

var SecurityService = function () {};

SecurityService.decryptJSON = function(text) {
    var bytes = CryptoJS.AES.decrypt(text, process.env.DECRYPT_KEY, {
        mode: CryptoJS.mode.CTR
    });

    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

module.exports = SecurityService;
