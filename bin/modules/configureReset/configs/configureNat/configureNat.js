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
const clearFirewall_1 = __importDefault(require("./clearFirewall/clearFirewall"));
function configureNat({ host, user, password }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { client, api } = yield (0, clientFactory_1.default)({ host, user, password });
        yield (0, clearFirewall_1.default)(client);
        const nat = client.menu('/ip firewall nat');
        const natModel = client.model(yield nat.getOnly());
        yield natModel.remove();
        yield nat.add({ action: "masquerade", chain: "srcnat", outInterface: "pppoe-out1" });
    });
}
exports.default = configureNat;
