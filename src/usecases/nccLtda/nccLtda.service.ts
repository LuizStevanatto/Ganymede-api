import IvrimApi from "../../api/api";
import OrderBV from "../../entities/orderBV.entity";
import * as dotenv from "dotenv";

dotenv.config();

class NccLtdaService {
	async invoicingNccLtda(data: OrderBV) {
		try {
			const json = {
				data: {
					cnpj_origem: data.cnpj_origem,
					dados_nfse: {
						cnpj: data.dados_nfse.cnpj,
						razao_social: data.dados_nfse.razao_social,
						valor_total: 1000,
						forma_pagamento: data.dados_nfse.forma_pagamento,
						condicao_pagamento: data.dados_nfse.condicao_pagamento,
					},
					info_complementares: {
						centro_custo: data.info_complementares.centro_custo,
						conta_contabil: data.info_complementares.conta_contabil,
						n_po_cliente: data.info_complementares.n_po_cliente,
						id_externo: data.info_complementares.id_externo,
						moeda: data.info_complementares.moeda,
						retencao_pcc: data.info_complementares.retencao_pcc,
						obs: data.info_complementares.obs,
					},
					notificar: data.notificar,
				},
			};

			const res = await IvrimApi.post("/integrate", json);

			var statusFaturamento = {};
			console.log(res.data.data._id);

			if (res.data.result == false) {
				statusFaturamento = {
					status: "NAO_FATURADO",
					message: res.data.response,
					retornoIntIvrim: "FALHA",
				};
			}

			if (res.data.result == true) {
				statusFaturamento = {
					status: "FATURADO",
					message: res.data.response,
					idIvirm: res.data.data._id,
					retornoIntIvrim: "SUCESSO",
				};
			}

			if (!res.data.result) {
				statusFaturamento = {
					status: "NAO_FATURADO",
					message: res.data.response,
					retornoIntIvrim: "FALHA",
				};
			}

			return statusFaturamento;
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
