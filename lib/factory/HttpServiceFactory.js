"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lavender = require("lavenderjs/lib");
/**
 * Created by dsmiley on 7/27/17.
 */
var HttpServiceFactory = /** @class */ (function () {
    function HttpServiceFactory() {
        if (HttpServiceFactory.INSTANCE != null) {
            throw ('HttpServiceFactory.INSTANCE: Singleton class has already been instantiated');
        }
        else {
            //perform any required object set up
        }
    }
    HttpServiceFactory.getInstance = function () {
        if (HttpServiceFactory.INSTANCE == null) {
            HttpServiceFactory.INSTANCE = new HttpServiceFactory();
        }
        return HttpServiceFactory.INSTANCE;
    };
    //override this method to return custon IService implementations
    HttpServiceFactory.prototype.getHttpService = function (code) {
        if (code === void 0) { code = 'Lavender.XhrHttpService'; }
        var httpService;
        switch (code) {
            case "Lavender.XhrHttpService":
            default:
                httpService = new Lavender.XhrHttpService();
                break;
        }
        return httpService;
    };
    HttpServiceFactory.INSTANCE = null;
    return HttpServiceFactory;
}());
exports.HttpServiceFactory = HttpServiceFactory;
//# sourceMappingURL=HttpServiceFactory.js.map