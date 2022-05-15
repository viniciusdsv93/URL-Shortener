import { config } from "config/constants";
import { NextFunction, Request, Response } from "express";
import shortId from "shortid";

export class URLController {
	public async shorten(req: Request, res: Response): Promise<void> {
		// verificar se URL já existe
		// criar a hash para essa URL
		const { originURL } = req.body;
		const hash = shortId.generate();
		const shortURL = `${config.API_URL}/${hash}`;
		// salvar a URL no banco
		// retornar a URL salva
		res.json({ originURL, hash, shortURL });
	}

	public async redirect(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		// Pegar o hash da URL
		const { hash } = req.params;

		// Encontrar a url original pelo hash
		const url = {
			originURL: "https://www.uol.com.br/",
			hash: "NoWrmoVVY",
			shortURL: "http://localhost:3001/NoWrmoVVY",
		};

		// Redirecionar para a URL original a partir do banco de dados
		res.redirect(url.originURL);
	}
}
