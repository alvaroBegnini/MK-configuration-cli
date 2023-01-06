import { RosApiModel } from "routeros-client";
import clientFactory from "../../utils/clientFactory";

async function removeIp( host: string ){
  const {client, api} = await clientFactory({
    host,
    user: "admin",
    password: "",
  });

  const addressModel = client.model(await client.menu("/ip address").getOnly({comment: "defconf"})) as RosApiModel
  await addressModel.remove()
  await api.disconnect()
}

export default removeIp