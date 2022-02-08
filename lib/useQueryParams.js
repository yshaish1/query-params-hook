"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQueryParams = void 0;
var useQueryParams = function () {
    var params = new URLSearchParams(window ? window.location.search : {});
    return new Proxy(params, {
        get: function (target, prop) {
            return target.get(prop);
        },
    });
};
exports.useQueryParams = useQueryParams;
