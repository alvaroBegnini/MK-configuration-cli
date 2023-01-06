import { configureResetType } from "../../types/configureReset";
import configureDHCP from "./configs/configureDHCP/configureDHCP";
import configurePool from "./configs/configureDHCP/configurePool";
import removeDHCPClient from "./configs/configureDHCP/removeDHCPClient";
import configureIdentity from "./configs/configureIdentity/configureIdentity";
import configureIp from "./configs/configureIp/configureIp";
import configureNat from "./configs/configureNat/configureNat";
import configurePppoe from "./configs/configurePppoe/configurePppoe";
import configureUser from "./configs/configureUsers";
import configureSecurityProfile from "./configs/configureWireless/configureSecurityProfile";
import configureWireless from "./configs/configureWireless/configureWireless";
import * as dotenv from 'dotenv'
dotenv.config()

async function configureReset({ clientName, panelName, clientUsername, clientPassword }: configureResetType) {

  const options = {
    host: "192.168.10.1",
    address: "192.168.10.1/24",
    ip: "192.168.88.1",
    oldUser: "admin",
    oldPassword: "",
    network: "192.168.10.0",
    wirelessPassword: process.env.WIRELESS_PASSWORD as string,
    user: process.env.USER as string,
    password: process.env.PASSWORD as string,
    ssid: panelName,
    clientName,
    clientUsername,
    clientPassword,
  };

  try {
    await configureIp(options);
    await configureUser(options);
    await configureSecurityProfile(options);
    await configureWireless(options);
    await configurePool(options);
    await removeDHCPClient(options);
    await configureDHCP(options);
    await configurePppoe(options);
    await configureNat(options);
    await configureIdentity(options);

    return true;
  } catch (error) {
    return false;
  }
}

export default configureReset;
