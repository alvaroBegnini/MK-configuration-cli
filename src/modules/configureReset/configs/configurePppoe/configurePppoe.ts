import { options } from "../../../../types/configureReset";
import clientFactory from "../../utils/clientFactory";

async function configurePppoe({ host, user, password, clientUsername, clientPassword }: options) {
  const {client, api} = await clientFactory({ host, user, password });
  await client
    .menu("/interface pppoe-client")
    .add({
      name: "pppoe-out1",
      maxMtu: 1492,
      maxMru: 1492,
      interface: "wlan1",
      user: clientUsername,
      password: clientPassword,
      profile: "default",
      allow: "pap",
      addDefaultRoute: true,
      usePeerDns: true,
      disabled: false,
    });
}

export default configurePppoe;
