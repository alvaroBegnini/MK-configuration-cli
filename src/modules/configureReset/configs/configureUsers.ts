import { RosApiModel } from "routeros-client";
import { options } from "../../../types/configureReset";
import clientFactory from "../utils/clientFactory";

async function configureUser({ host, user, password, oldUser, oldPassword }: options) {
  const { client, api } = await clientFactory({ host, user: oldUser, password: oldPassword });
  const users = await client.menu("/user").getOnly();
  await client.menu("/user").add({ name: user, password: password, group: "full" });
  const userModel = client.model(users) as RosApiModel
  await userModel.remove();
  await api.disconnect();
}

export default configureUser;
