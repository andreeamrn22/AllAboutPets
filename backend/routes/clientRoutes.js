import express from "express";
import { createClient, getClientById, updateClient, deleteClient } from "../dataAccess/clientDa.js";

const clientRouter = express.Router();

// Endpoint pentru crearea unui client nou
clientRouter.post("/create", async (req, res) => {
  try {
    const { nume, prenume, email, telefon } = req.body;
    const client = await createClient({ nume, prenume, email, telefon });
    res.status(201).json({ message: "Client created", client });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint pentru afișarea detaliilor unui client după ID
clientRouter.get("/:clientId", async (req, res) => {
  try {
    const clientId = req.params.clientId;
    const client = await getClientById(clientId);
    if (!client) {
      res.status(404).json({ message: "Client not found" });
    } else {
      res.status(200).json({ client });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint pentru actualizarea unui client existent
clientRouter.put("/:clientId", async (req, res) => {
  try {
    const clientId = req.params.clientId;
    const newData = req.body;
    const updatedClient = await updateClient(clientId, newData);
    res.status(200).json({ message: "Client updated", updatedClient });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint pentru ștergerea unui client existent
clientRouter.delete("/:clientId", async (req, res) => {
  try {
    const clientId = req.params.clientId;
    await deleteClient(clientId);
    res.status(200).json({ message: "Client deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default clientRouter;
