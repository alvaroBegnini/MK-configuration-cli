import { RosApiMenu, RosApiModel } from "routeros-client"

async function clearInterfaceList(client: RosApiMenu) {
  const interfaceLists = await client.menu("/interface list").getAll()
  const interfaceListMembers = await client.menu("/interface list member").getAll()

  for(const interfaceList of interfaceLists){
    try{
      const interfaceListModel = client.model(interfaceList) as RosApiModel
      await interfaceListModel.remove()
    }
    catch(e){}
  }

  for(const interfaceListMember of interfaceListMembers){
    try{
      const interfaceListMemberModel = client.model(interfaceListMember) as RosApiModel
      await interfaceListMemberModel.remove()
    }
    catch(e){}
  }
}

export default clearInterfaceList