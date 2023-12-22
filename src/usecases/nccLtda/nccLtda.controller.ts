import { Request, Response } from "express";
import * as dotenv from "dotenv";
import dataSource from "../../database/connection";
import ConcatData from "./helpers/concatData";
import nccLtdaService from "./nccLtda.service";

dotenv.config();

class NccLtdaController {
	async invoicingNccLtda(request: Request, response: Response) {
		var { numProcess } = request.query;

		const data = await dataSource.query(`SELECT * FROM vwGanymede_NCC206 WHERE NUM_PROCES = ${numProcess} AND faturar = 'ncc'`);

		const orderBV = await new ConcatData(data[0]).concatData();

		const res = await nccLtdaService.invoicingNccLtda(orderBV);

		return response.json(orderBV);
	}

	async doneNccLtda(request: Request, response: Response) {
		const res = await nccLtdaService.nccLtdaIvrimDone();

		return response.json(res);
	}
}

export default new NccLtdaController();
