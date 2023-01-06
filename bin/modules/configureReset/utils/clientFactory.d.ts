import { RouterOSClient } from "routeros-client";
import { clientFactoryTye } from "../../../types/configureReset";
declare function clientFactory({ host, user, password }: clientFactoryTye): Promise<{
    client: import("routeros-client").RosApiMenu;
    api: RouterOSClient;
}>;
export default clientFactory;
