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
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
const getInput = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(chalk_1.default.bgBlue("\nParâmetros de configuração\n"));
    const clientName = yield inquirer_1.default.prompt({
        name: "client_name",
        type: "input",
        message: "Qual o nome do cliente?",
    });
    const clientUsername = yield inquirer_1.default.prompt({
        name: "client_pppoe",
        type: "input",
        message: "Qual o usuário (pppoe) do cliente?",
    });
    const clientPassword = yield inquirer_1.default.prompt({
        name: "client_password",
        type: "input",
        message: "Digite a senha (pppoe) do cliente?",
    });
    let panels = yield inquirer_1.default.prompt({
        name: "panel_name",
        type: "list",
        message: "Qual o nome do painel?",
        choices: [
            "TORRE S01",
            "TORRE S02",
            "TORRE S03",
            "TORRE L01",
            "TORRE CN 01",
            "TORRE CN 02",
            "TORRE CN 03",
            "IDL-C",
            "TORRE N01",
            "TORRE N02",
            "PERSONALIZADO"
        ],
    });
    if (panels.panel_name === "PERSONALIZADO") {
        panels = yield inquirer_1.default.prompt({
            name: "panel_name",
            type: "input",
            message: "Digite o painel",
        });
    }
    return {
        clientName: clientName.client_name,
        panelName: panels.panel_name,
        clientUsername: clientUsername.client_pppoe,
        clientPassword: clientPassword.client_password,
    };
});
exports.default = getInput;
