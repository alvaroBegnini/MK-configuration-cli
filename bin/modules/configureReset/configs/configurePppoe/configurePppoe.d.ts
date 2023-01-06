import { options } from "../../../../types/configureReset";
declare function configurePppoe({ host, user, password, clientUsername, clientPassword }: options): Promise<void>;
export default configurePppoe;
