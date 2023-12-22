import IvrimApi from "../../api/api";
import OrderBV from "../../entities/orderBV.entity";

class NccLtdaService {
	async invoicingNccLtda(data: OrderBV): Promise<void> {
		try {
			const json = {
				data: data,
			};

			const res = await IvrimApi.post("/integrate", json);

			return res.data;
		} catch (error) {
			console.log(error);
			return;
		}
	}
	async nccLtdaIvrimDone(): Promise<void> {
		const res = await IvrimApi.get("/done");
		return res.data;
	}
}

export default new NccLtdaService();
