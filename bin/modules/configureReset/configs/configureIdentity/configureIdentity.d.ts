import { options } from "../../../../types/configureReset";
declare function configureIdentity({ host, user, password, clientName }: options): Promise<void>;
export default configureIdentity;
