"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var venom_bot_1 = require("venom-bot");
var Message_1 = require("./entity/Message");
var Contact_1 = require("./entity/Contact");
var filePathMessage = "./build/json/messagem.json";
var filePathContact = "./build/json/contact.json";
var Bot = /** @class */ (function () {
    function Bot() {
    }
    Bot.triggerMessage = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var loadedMessage, loadedContact, contacts, _a, _b, _c, _i, contactName, phoneNumber, result, error_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        loadedMessage = Message_1.Message.loadFromFile(filePathMessage);
                        loadedContact = Contact_1.Contact.loadFromFile(filePathContact);
                        if (!loadedMessage || !loadedContact) {
                            console.error("O arquivo mensagem.json ou contact.json não foi encontrado.");
                            return [2 /*return*/];
                        }
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 7, , 8]);
                        contacts = loadedContact.getJsonContact();
                        _a = contacts;
                        _b = [];
                        for (_c in _a)
                            _b.push(_c);
                        _i = 0;
                        _d.label = 2;
                    case 2:
                        if (!(_i < _b.length)) return [3 /*break*/, 6];
                        _c = _b[_i];
                        if (!(_c in _a)) return [3 /*break*/, 5];
                        contactName = _c;
                        if (!Object.prototype.hasOwnProperty.call(contacts, contactName)) return [3 /*break*/, 5];
                        phoneNumber = contacts[contactName];
                        return [4 /*yield*/, client.sendText("55".concat(phoneNumber, "@c.us"), loadedMessage.getJsonMessage().mensagem)];
                    case 3:
                        result = _d.sent();
                        console.log("Result: ", result);
                        // Altere o tempo como for nescessario se tiver dando muito bloqueio vai aumentando.
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 3000); })];
                    case 4:
                        // Altere o tempo como for nescessario se tiver dando muito bloqueio vai aumentando.
                        _d.sent();
                        _d.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 2];
                    case 6: return [2 /*return*/, "Mensagem enviada com sucesso!"];
                    case 7:
                        error_1 = _d.sent();
                        console.error("Erro ao enviar: ", error_1);
                        return [2 /*return*/, error_1];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return Bot;
}());
// Adicionei uma função wrapper para capturar e tratar os erros de criação do cliente
function startBot() {
    return __awaiter(this, void 0, void 0, function () {
        var client, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, (0, venom_bot_1.create)({ session: 'Disparo' })];
                case 1:
                    client = _a.sent();
                    return [4 /*yield*/, Bot.triggerMessage(client)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error("Erro ao iniciar o bot:", error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
startBot();
//# sourceMappingURL=server.js.map