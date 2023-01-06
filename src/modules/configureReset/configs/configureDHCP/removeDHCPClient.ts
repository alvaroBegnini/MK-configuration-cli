import { RosApiModel } from "routeros-client"
import { options } from "../../../../types/configureReset"
import clientFactory from "../../utils/clientFactory"

async function removeDHCPClient({host, user, password}: options) {
  const {client, api} = await clientFactory({host, user, password})
  const dhcpClient = await client.menu("/ip dhcp-client").getOnly()
  const dhcpClientModel = client.model(dhcpClient) as RosApiModel
  await dhcpClientModel.remove()
}

export default removeDHCPClient