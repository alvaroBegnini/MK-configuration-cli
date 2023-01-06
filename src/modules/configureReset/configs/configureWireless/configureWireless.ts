import { RosApiModel } from "routeros-client";
import { options } from "../../../../types/configureReset";
import clientFactory from "../../utils/clientFactory";

async function configureWireless({ host, user, password, ssid, clientName }: options) {
  const { client, api } = await clientFactory({ host, user, password });
  const wirelessModel = client.model(await client.menu("/interface wireless").getOnly()) as RosApiModel
  const wireless = await wirelessModel.update({
  ssid,
    radioName: clientName,
    channelWidth: "20mhz",
    scanList: "5200-5825",
    country: "brazil",
    frequencyMode: "superchannel",
    installation: "any",
    ampduPriorities: [0, 1, 2, 3, 4, 5, 6, 7],
    securityProfile: "profile1"
  });
  const nstremeModel = client.model(await client.menu("/interface wireless nstreme").getOnly()) as RosApiModel
  await nstremeModel.update({enableNstreme: true})
  await api.disconnect();
  return wireless;
}

export default configureWireless;
