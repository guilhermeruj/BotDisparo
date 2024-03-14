"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var fs = __importStar(require("fs"));
var Message = /** @class */ (function () {
    function Message(jsonMessage) {
        this.jsonMessage = jsonMessage;
    }
    Message.prototype.setJsonMessage = function (jsonMessage) {
        this.jsonMessage = jsonMessage;
    };
    Message.prototype.getJsonMessage = function () {
        return this.jsonMessage;
    };
    Message.prototype.saveToFile = function (filename) {
        var jsonString = JSON.stringify(this.jsonMessage, null, 2);
        fs.writeFileSync(filename, jsonString);
    };
    Message.loadFromFile = function (filename) {
        var jsonString = fs.readFileSync(filename, "utf-8");
        var jsonMessage = JSON.parse(jsonString);
        return new Message(jsonMessage);
    };
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=Message.js.map