"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
var fs_1 = __importDefault(require("fs"));
var Contact = /** @class */ (function () {
    function Contact(jsonContact) {
        this.jsonContact = jsonContact;
    }
    Contact.prototype.setJsonContact = function (jsonContact) {
        this.jsonContact = jsonContact;
    };
    Contact.prototype.getJsonContact = function () {
        return this.jsonContact;
    };
    Contact.prototype.saveToFile = function (filename) {
        var jsonString = JSON.stringify(this.jsonContact, null, 2);
        fs_1.default.writeFileSync(filename, jsonString);
    };
    Contact.loadFromFile = function (filename) {
        var jsonString = fs_1.default.readFileSync(filename, "utf-8");
        var jsonContact = JSON.parse(jsonString);
        return new Contact(jsonContact);
    };
    return Contact;
}());
exports.Contact = Contact;
//# sourceMappingURL=Contact.js.map