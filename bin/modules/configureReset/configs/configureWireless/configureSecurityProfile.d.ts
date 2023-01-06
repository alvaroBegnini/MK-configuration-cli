import { options } from "../../../../types/configureReset";
declare function configureSecurityProfile({ host, user, password, wirelessPassword }: options): Promise<void>;
export default configureSecurityProfile;
