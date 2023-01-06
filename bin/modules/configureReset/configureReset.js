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
const configureDHCP_1 = __importDefault(require("./configs/configureDHCP/configureDHCP"));
const configurePool_1 = __importDefault(require("./configs/configureDHCP/configurePool"));
const removeDHCPClient_1 = __importDefault(require("./configs/configureDHCP/removeDHCPClient"));
const configureIdentity_1 = __importDefault(require("./configs/configureIdentity/configureIdentity"));
const configureIp_1 = __importDefault(require("./configs/configureIp/configureIp"));
const configureNat_1 = __importDefault(require("./configs/configureNat/configureNat"));
const configurePppoe_1 = __importDefault(require("./configs/configurePppoe/configurePppoe"));
const configureUsers_1 = __importDefault(require("./configs/configureUsers"));
const configureSecurityProfile_1 = __importDefault(require("./configs/configureWireless/configureSecurityProfile"));
const configureWireless_1 = __importDefault(require("./configs/configureWireless/configureWireless"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
function configureReset({ clientName, panelName, clientUsername, clientPassword }) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            host: "192.168.10.1",
            address: "192.168.10.1/24",
            ip: "192.168.88.1",
            oldUser: "admin",
            oldPassword: "",
            network: "192.168.10.0",
            wirelessPassword: process.env.WIRELESS_PASSWORD,
            user: process.env.USER,
            password: process.env.PASSWORD,
            ssid: panelName,
            clientName,
            clientUsername,
            clientPassword,
        };
        try {
            yield (0, configureIp_1.default)(options);
            yield (0, configureUsers_1.default)(options);
            yield (0, configureSecurityProfile_1.default)(options);
            yield (0, configureWireless_1.default)(options);
            yield (0, configurePool_1.default)(options);
            yield (0, removeDHCPClient_1.default)(options);
            yield (0, configureDHCP_1.default)(options);
            yield (0, configurePppoe_1.default)(options);
            yield (0, configureNat_1.default)(options);
            yield (0, configureIdentity_1.default)(options);
            return true;
        }
        catch (error) {
            return false;
        }
    });
}
exports.default = configureReset;
