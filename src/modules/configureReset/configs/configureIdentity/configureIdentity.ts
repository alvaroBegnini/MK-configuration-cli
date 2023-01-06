import { options } from "../../../../types/configureReset"
import clientFactory from "../../utils/clientFactory"

async function configureIdentity({host, user, password, clientName}: options) {
  const { client, api } = await clientFactory({host, user, password})
  await client.menu('/system identity').exec("set", {name: clientName})
  await api.disconnect()
}

export default configureIdentity