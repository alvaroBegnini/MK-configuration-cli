import { options } from "../../../../types/configureReset";
import clientFactory from "../../utils/clientFactory";

async function configureSecurityProfile({ host, user, password, wirelessPassword }: options) {
  const { client, api } = await clientFactory({ host, user, password });

  await client.menu("/interface wireless security-profiles").add({
    name: "profile1",
    mode: "dynamic-keys",
    authenticationTypes: "wpa-psk,wpa2-psk",
    unicastCiphers: "aes-ccm",
    groupCiphers: "aes-ccm",
    'wpa2-pre-shared-key': wirelessPassword,
    'wpa-pre-shared-key': wirelessPassword,
  });
  await api.disconnect();
}

export default configureSecurityProfile;
