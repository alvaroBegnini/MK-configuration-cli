import { configureResetType } from "../../types/configureReset";
declare function configureReset({ clientName, panelName, clientUsername, clientPassword }: configureResetType): Promise<boolean>;
export default configureReset;
