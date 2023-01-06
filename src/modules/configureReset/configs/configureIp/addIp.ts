import clientFactory from "../../utils/clientFactory";

async function addIp(ip: string, address: string, network: string) {
  const {client, api} = await clientFactory({
    host: ip,
    user: "admin",
    password: "",
  });
  await client.menu("/ip address").add({address, network, interface: "ether1"})
  await api.disconnect()
}

export default addIp