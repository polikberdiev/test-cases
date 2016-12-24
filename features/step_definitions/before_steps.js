"use strict";

module.exports = function () {
    this.Before(function () {
        browser.ignoreSynchronization = true;
    });
};