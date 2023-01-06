import { options } from "../../../../types/configureReset";
declare function configureDHCP({ host, user, password, address, network }: options): Promise<void>;
export default configureDHCP;
