// application programming interface
// CRUD = Create, Read, Update and Delete
// endpoint é uma rota que pode ser acessada numa api
// --watch./api/server.js
// o --watch faz com que o servidor reinicie a cada atualização
// endpoint
// middleware é uma função que acontece no meio do caminho

import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3001;

// middleware - tem que fazer antes das requisições
app.use(cors());

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT} `);
});
