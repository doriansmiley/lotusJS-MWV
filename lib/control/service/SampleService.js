"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Lavender = require("lavenderjs/lib");
var HttpServiceFactory_1 = require("../../factory/HttpServiceFactory");
/**
 * Created by dsmiley on 7/27/17.
 * This is a sample asynchronous action used in unit tests. It can be used as a template though for all asynch actions
 */
var SampleService = /** @class */ (function (_super) {
    __extends(SampleService, _super);
    function SampleService(config) {
        var _this = _super.call(this) || this;
        _this.config = config;
        _this.serviceMap = (config.hasOwnProperty('serviceMap')) ? config['serviceMap'] :
            {
                'echoJSON': ':3000/echoJSON/key/{0}',
                'localRequest': ':3000/printondemand/1234/photos/{0}'
            };
        return _this;
    }
    SampleService.prototype.getURLWithParams = function (key, args) {
        return (args !== null && args !== undefined) ? Lavender.StringUtil.substitute(this.getURL(key), args) : this.getURL(key);
    };
    SampleService.prototype.getURL = function (key) {
        return this.config.baseUrl + this.serviceMap[key];
    };
    SampleService.prototype.echoJSON = function (jsonKey, key, responder, paramObj, format, contentType, cache) {
        if (paramObj === void 0) { paramObj = {}; }
        if (format === void 0) { format = 'json'; }
        if (contentType === void 0) { contentType = 'application/json'; }
        if (cache === void 0) { cache = false; }
        //this is a sample service method to be used as an example only. You service methods will be dependent on your service API and model objects
        //note the use of the key param. This is a very importnat feature and I highly recommend that whatever service you created implements a similar method
        //don't hard code or otherwise tightly couple the URL creation inside this method. The use of a builder pattern ensures the end point can be changed based on environment
        var url = this.getURLWithParams(key, [jsonKey]);
        return this.sendRequest(true, responder, url, paramObj, format, contentType, cache);
    };
    SampleService.prototype.testRequestUsingIncludedAPI = function (key, responder, format, contentType, cache) {
        if (format === void 0) { format = 'json'; }
        if (contentType === void 0) { contentType = 'application/json'; }
        if (cache === void 0) { cache = false; }
        var url = this.getURLWithParams(key, ['54232fc2-7345-4921-8079']); //hard coded args
        return this.sendRequest(false, responder, url, null, format, contentType, cache);
    };
    SampleService.prototype.sendRequest = function (isPostRequest, responder, url, paramObj, format, contentType, cache) {
        if (paramObj === void 0) { paramObj = {}; }
        if (format === void 0) { format = 'json'; }
        if (contentType === void 0) { contentType = 'application/json'; }
        if (cache === void 0) { cache = false; }
        var params = JSON.stringify(paramObj);
        if (cache === null || cache === undefined) {
            cache = false;
        }
        var httpRequestInstance = HttpServiceFactory_1.HttpServiceFactory.getInstance().getHttpService(this.config.serviceCode);
        httpRequestInstance.addResponder(responder);
        var requestType = (isPostRequest) ? 'POST' : 'GET';
        return httpRequestInstance.send(requestType, url, params, contentType, format, cache);
    };
    return SampleService;
}(Lavender.AbstractHttpService));
exports.SampleService = SampleService;
//# sourceMappingURL=SampleService.js.map