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
function configureWireless({ host, user, password, ssid, clientName }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { client, api } = yield (0, clientFactory_1.default)({ host, user, password });
        const wirelessModel = client.model(yield client.menu("/interface wireless").getOnly());
        const wireless = yield wirelessModel.update({
            ssid,
            radioName: clientName,
            channelWidth: "20mhz",
            scanList: "5200-5825",
            country: "brazil",
            frequencyMode: "superchannel",
            installation: "any",
            ampduPriorities: [0, 1, 2, 3, 4, 5, 6, 7],
            securityProfile: "profile1"
        });
        const nstremeModel = client.model(yield client.menu("/interface wireless nstreme").getOnly());
        yield nstremeModel.update({ enableNstreme: true });
        yield api.disconnect();
        return wireless;
    });
}
exports.default = configureWireless;
