import { URLController } from "controller/URLcontroller";
import { MongoConnection } from "database/MongoConnection";
import express, { Request, Response, NextFunction } from "express";

const api = express();
api.use(express.json());

const database = new MongoConnection();
database.connect();

const urlController = new URLController();

api.post("/shorten", urlController.shorten);

api.get("/:hash", urlController.redirect);

const port = 3001;

api.listen(port, () => {
	console.log("Servidor ouvindo na porta: ", port);
});
