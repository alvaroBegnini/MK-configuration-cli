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
function configureSecurityProfile({ host, user, password, wirelessPassword }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { client, api } = yield (0, clientFactory_1.default)({ host, user, password });
        yield client.menu("/interface wireless security-profiles").add({
            name: "profile1",
            mode: "dynamic-keys",
            authenticationTypes: "wpa-psk,wpa2-psk",
            unicastCiphers: "aes-ccm",
            groupCiphers: "aes-ccm",
            'wpa2-pre-shared-key': wirelessPassword,
            'wpa-pre-shared-key': wirelessPassword,
        });
        yield api.disconnect();
    });
}
exports.default = configureSecurityProfile;
