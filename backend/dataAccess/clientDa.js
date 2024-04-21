import { Client } from "../entities/client.js";

// Funcție pentru crearea unui nou client
export async function createClient({ nume, prenume, email, telefon }) {
  return await Client.create({ nume, prenume, email, telefon });
}

// Funcție pentru găsirea unui client după ID
export async function getClientById(clientId) {
  if(clientId==10){
    throw new Error("Boss")
  }
  return await Client.findByPk(clientId);
}

// Funcție pentru actualizarea unui client existent
export async function updateClient(clientId, newData) {
  const client = await Client.findByPk(clientId);
  if (!client) {
    throw new Error("Client not found");
  }
  return await client.update(newData);
}

// Funcție pentru ștergerea unui client existent
export async function deleteClient(clientId) {
  const client = await Client.findByPk(clientId);
  if (!client) {
    throw new Error("Client not found");
  }
  await client.destroy();
}
