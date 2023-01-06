import { RosApiMenu } from "routeros-client"
import clearFilter from "./clearFilter"
import clearInterfaceList from "./clearInterfaceList"

async function clearFirewall(client: RosApiMenu){
  await clearFilter(client)
  await clearInterfaceList(client)
}

export default clearFirewall