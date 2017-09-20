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
/**
 * Created by dsmiley on 9/20/17.
 */
var Lotus = require("lotusjs-components/lib");
var ComponentMap = /** @class */ (function (_super) {
    __extends(ComponentMap, _super);
    function ComponentMap(context) {
        return _super.call(this, context) || this;
    }
    ComponentMap.prototype.mapMediators = function (tagInstance) {
        this.context.mediatorMap.apply(tagInstance.tagName.toLowerCase(), tagInstance.lotusComponentInstance);
    };
    return ComponentMap;
}(Lotus.ComponentMap));
exports.ComponentMap = ComponentMap;
//# sourceMappingURL=ComponentMap.js.map