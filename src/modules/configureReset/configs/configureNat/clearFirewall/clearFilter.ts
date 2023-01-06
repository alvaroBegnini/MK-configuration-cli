import { RosApiMenu, RosApiModel } from "routeros-client";

async function clearFilter(client: RosApiMenu) {
  const filters = await client.menu("/ip firewall filter").getAll();
  for (const filter of filters) {
    try {
      const filterModel = client.model(filter) as RosApiModel
      await filterModel.remove();
    } catch (e) {}
  }
}

export default clearFilter;
