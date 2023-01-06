import { RosApiModel } from "routeros-client"
import { options } from "../../../../types/configureReset"
import clientFactory from "../../utils/clientFactory"

async function configureDHCP({host, user, password, address, network}: options) {
  const {client, api} = await clientFactory({host, user, password})
  const dhcp = client.menu("/ip dhcp-server")
  const dhcpModel = client.model(await dhcp.getOnly()) as RosApiModel
  await dhcpModel.remove()
  dhcp.add({addressPool: "dhcp-pool", interface: "ether1", name: "dhcp1", disabled: false})
  const networkDHCP = client.menu("/ip dhcp-server network")
  const networkModel = client.model(await networkDHCP.getOnly()) as RosApiModel
  await networkModel.remove()
  await networkDHCP.add({address: `${network}/24`, gateway: host})
}

export default configureDHCP