import { options } from "../../../../types/configureReset";
declare function configureWireless({ host, user, password, ssid, clientName }: options): Promise<any>;
export default configureWireless;
