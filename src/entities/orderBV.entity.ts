class OrderBV {
	cnpj_origem: string;
	dados_nfse: {
		cnpj: string;
		razao_social: string;
		valor_total: number;
		forma_pagamento: string;
		condicao_pagamento: string;
	};
	info_complementares: {
		centro_custo: string;
		conta_contabil: string;
		n_po_cliente: string;
		id_externo: string;
		moeda: string;
		retencao_pcc?: string;
		obs?: string;
	};
	notificar?: { email: string }[];

	constructor() {
		this.cnpj_origem = "";
		this.dados_nfse = {
			cnpj: "",
			razao_social: "",
			valor_total: 0,
			forma_pagamento: "",
			condicao_pagamento: "",
		};
		this.info_complementares = {
			centro_custo: "",
			conta_contabil: "",
			n_po_cliente: "",
			id_externo: "",
			moeda: "",
		};
		this.notificar = [{ email: "" }];
	}
}

export default OrderBV;
