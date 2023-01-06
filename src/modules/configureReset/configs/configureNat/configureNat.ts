import { RosApiModel } from "routeros-client"
import { options } from "../../../../types/configureReset"
import clientFactory from "../../utils/clientFactory"
import clearFirewall from "./clearFirewall/clearFirewall"

async function configureNat({host, user, password}: options){
  const { client, api } = await clientFactory({host, user, password})

  await clearFirewall(client)
  const nat = client.menu('/ip firewall nat')
  const natModel = client.model(await nat.getOnly()) as RosApiModel
  await natModel.remove()
  await nat.add({action: "masquerade", chain: "srcnat", outInterface: "pppoe-out1"})
}

export default configureNat