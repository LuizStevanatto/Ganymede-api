import { Request, Response } from "express";
import * as dotenv from "dotenv";
import ConcatData from "./helpers/concatData";
import nccLtdaService from "./nccLtda.service";
import FluigProvider from "../../providers/fluigProvider";

dotenv.config();

interface IFluigProvider {
	consumerKey: string;
	consumerSecret: string;
	tokenKey: string;
	tokenSecret: string;
	baseURL: string;
}

class NccLtdaController {
	async invoicingNccLtda(request: Request, response: Response) {
		var { numProcess } = request.query;

		var dataset = "dsNCC206";
		var field = "numProcess";

		var baseUrl = `https://fluigteste.ncc.com.br/api/public/ecm/dataset`;
		var filters = `/search?datasetId=${dataset}&searchField=${field}&searchValue=`;

		const fluigProviderRequest: IFluigProvider = {
			consumerKey: process.env.TESTE_CONSUMER_KEY,
			consumerSecret: process.env.TESTE_CONSUMER_SECRET,
			tokenKey: process.env.TESTE_TOKEN,
			tokenSecret: process.env.TESTE_TOKEN_SECRET,
			baseURL: `${baseUrl}${filters}${numProcess}`,
		};

		const fluigHelper = new FluigProvider(fluigProviderRequest);

		const urlDaAPI = `${filters}${numProcess}`;
		const metodoDaAPI = "GET";
		const dataDaAPI = null;

		const data = await fluigHelper.makeRequest(urlDaAPI, metodoDaAPI, dataDaAPI);
		console.log(data);

		// const orderBV = await new ConcatData(data[0]).concatData();

		// const res =  nccLtdaService.invoicingNccLtda(orderBV);

		return response.json(numProcess);
	}

	async doneNccLtda(request: Request, response: Response) {
		const res = await nccLtdaService.nccLtdaIvrimDone();

		return response.json(res);
	}
}

export default new NccLtdaController();
