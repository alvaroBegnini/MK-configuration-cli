import { RouterOSClient } from "routeros-client";
import { clientFactoryTye } from "../../../types/configureReset";

async function clientFactory({ host, user, password }: clientFactoryTye) {
  const api = new RouterOSClient({
    host,
    user,
    password,
    keepalive: true,
    timeout: 2,
  });
  const client = await api.connect();
  return {client, api};
}

export default clientFactory;
