import { options } from "../../../types/configureReset";
declare function configureUser({ host, user, password, oldUser, oldPassword }: options): Promise<void>;
export default configureUser;
