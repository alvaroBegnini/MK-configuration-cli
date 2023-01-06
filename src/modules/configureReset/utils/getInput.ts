import chalk from "chalk";
import inquirer from "inquirer";

const getInput = async () => {
  console.log(chalk.bgBlue("\nParâmetros de configuração\n"))
  const clientName = await inquirer.prompt({
    name: "client_name",
    type: "input",
    message: "Qual o nome do cliente?",
  });

  const clientUsername = await inquirer.prompt({
    name: "client_pppoe",
    type: "input",
    message: "Qual o usuário (pppoe) do cliente?",
  });

  const clientPassword = await inquirer.prompt({
    name: "client_password",
    type: "input",
    message: "Digite a senha (pppoe) do cliente?",
  });

  let panels = await inquirer.prompt({
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

  if(panels.panel_name === "PERSONALIZADO"){
    panels = await inquirer.prompt({
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
};

export default getInput;
