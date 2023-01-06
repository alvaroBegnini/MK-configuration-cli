#!/usr/bin/env node

import getInput from "./modules/configureReset/utils/getInput";
import configureReset from "./modules/configureReset/configureReset";
import figlet from "figlet";
import chalk from "chalk";
import { createSpinner } from "nanospinner";

const config = async () => {
  console.clear()
  figlet("Configurar Antena", async (err, data) => {
    console.log(chalk.bgBlue(`\n${data}`));

    const res = await getInput();
    const spinner = createSpinner("Aguarde").start();
    const result = await configureReset(res);
    result ? spinner.success({text: "Antena configurada com sucesso"}) : spinner.error({text:"Erro na configuração"})


    process.exit(0);
  });
};

config();
