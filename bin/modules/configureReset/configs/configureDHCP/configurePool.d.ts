import { options } from "../../../../types/configureReset";
declare function configurePool({ host, user, password, address }: options): Promise<void>;
export default configurePool;
