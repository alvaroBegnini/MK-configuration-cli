import { options } from "../../../../types/configureReset";
import addIp from "./addIp";
import removeIp from "./removeIp";

async function configureIp({ host, ip, address, network }: options) {
  await addIp(ip, address, network);
  await removeIp(host);
}

export default configureIp;
