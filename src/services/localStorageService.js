"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearLocalStorage = exports.setLocalStorage = exports.getLocalStorage = void 0;
var getLocalStorage = function (key) {
    var data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
};
exports.getLocalStorage = getLocalStorage;
var setLocalStorage = function (key, data) {
    localStorage.setItem(key, JSON.stringify(data));
};
exports.setLocalStorage = setLocalStorage;
var clearLocalStorage = function (key) {
    localStorage.removeItem(key);
};
exports.clearLocalStorage = clearLocalStorage;
