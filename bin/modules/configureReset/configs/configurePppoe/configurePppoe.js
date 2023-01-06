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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clientFactory_1 = __importDefault(require("../../utils/clientFactory"));
function configurePppoe({ host, user, password, clientUsername, clientPassword }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { client, api } = yield (0, clientFactory_1.default)({ host, user, password });
        yield client
            .menu("/interface pppoe-client")
            .add({
            name: "pppoe-out1",
            maxMtu: 1492,
            maxMru: 1492,
            interface: "wlan1",
            user: clientUsername,
            password: clientPassword,
            profile: "default",
            allow: "pap",
            addDefaultRoute: true,
            usePeerDns: true,
            disabled: false,
        });
    });
}
exports.default = configurePppoe;
