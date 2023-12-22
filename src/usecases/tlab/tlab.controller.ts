import { Request, Response } from "express";
import * as dotenv from "dotenv";

dotenv.config();
interface IInvoicingTLABRequest {
	cnpj: string;
	numProcess: string;
}

class TlabController {
	async invoicingTLAB(request: Request, response: Response) {
		var { numProcess } = request.body;

		return response.json({ message: "Hello from TLAB" });
	}
}

export default new TlabController();
