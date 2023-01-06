#!/usr/bin/env node
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
const getInput_1 = __importDefault(require("./modules/configureReset/utils/getInput"));
const configureReset_1 = __importDefault(require("./modules/configureReset/configureReset"));
const figlet_1 = __importDefault(require("figlet"));
const chalk_1 = __importDefault(require("chalk"));
const nanospinner_1 = require("nanospinner");
const config = () => __awaiter(void 0, void 0, void 0, function* () {
    console.clear();
    (0, figlet_1.default)("Configurar Antena", (err, data) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(chalk_1.default.bgBlue(`\n${data}`));
        const res = yield (0, getInput_1.default)();
        const spinner = (0, nanospinner_1.createSpinner)("Aguarde").start();
        const result = yield (0, configureReset_1.default)(res);
        result ? spinner.success({ text: "Antena configurada com sucesso" }) : spinner.error({ text: "Erro na configuração" });
        process.exit(0);
    }));
});
config();
