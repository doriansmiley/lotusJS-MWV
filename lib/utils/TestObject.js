"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by dsmiley on 10/25/17.
 */
var Lavender = require("lavenderjs/lib");
var TestObject = /** @class */ (function () {
    function TestObject(id, label) {
        this.id = Lavender.UuidUtils.generateUUID();
        this.label = Lavender.UuidUtils.generateUUID();
        if (id) {
            this.id = id;
        }
        if (label) {
            this.label = label;
        }
    }
    return TestObject;
}());
exports.TestObject = TestObject;
//# sourceMappingURL=TestObject.js.map