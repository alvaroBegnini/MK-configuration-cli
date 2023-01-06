import { RosApiModel } from "routeros-client"
import { options } from "../../../../types/configureReset"
import clientFactory from "../../utils/clientFactory"

async function configurePool({host, user, password, address}: options) {
  const {client, api} = await clientFactory({host, user, password})
  const ip = (address.split("/")[0]).match(/[0-9]{3}.[0-9]{3}.[0-9]{2}/)![0]
  const ipRange = `${ip}.2-${ip}.254`
  const poolModel = client.model(await client.menu("/ip pool").getOnly()) as RosApiModel
  await poolModel.remove()
  await client.menu("/ip pool").add({name: "dhcp-pool", ranges: ipRange})
  await api.disconnect()
}

export default configurePool;
