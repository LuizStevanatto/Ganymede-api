import IRequestData from "./IRequestData";
import OrderBV from "./../../../entities/orderBV.entity";

class ConcatData {
	data: IRequestData;
	constructor(data: IRequestData) {
		this.data = data;
	}

	async concatData(): Promise<OrderBV> {
		const orderBV = new OrderBV();

		var valor_total = parseFloat(this.data.valorTotalNota.replace(",", "."));

		const CNPJ = process.env.NCC_LTDA_CNPJ;

		orderBV.cnpj_origem = CNPJ;

		orderBV.dados_nfse.cnpj = this.data.cnpjFatura;
		orderBV.dados_nfse.razao_social = this.data.razaoSocialFatura;
		orderBV.dados_nfse.valor_total = valor_total;
		orderBV.dados_nfse.forma_pagamento = this.data.formaPagamento;
		orderBV.dados_nfse.condicao_pagamento = this.data.numParcelas;

		orderBV.info_complementares.centro_custo = this.data.codCentroCusto;
		orderBV.info_complementares.conta_contabil = this.data.contaContabil;
		orderBV.info_complementares.n_po_cliente = this.data.numPurchaseOrder;
		orderBV.info_complementares.id_externo = String(this.data.NUM_PROCES);
		orderBV.info_complementares.retencao_pcc = this.data.regraRetencaoPCC;
		orderBV.info_complementares.moeda = this.data.moedaCambio;

		var obs = this.data.descricaoNota;
		obs = obs.replace("\n", "").replace("\r", " ").replace("  ", " ").replace("\r\n", " ").replace("\r\n\r\n", "");
		orderBV.info_complementares.obs = obs;

		var emailFatura = this.data.emailFatura;

		var array = [{ email: "" }];

		const arr = emailFatura.split(";");

		for (let i = 0; i < arr.length; i++) {
			arr[i] = arr[i].replace(" ", "");
			array.push({ email: arr[i] });
		}
		array.shift();
		orderBV.notificar = array;

		return orderBV;
	}
}

export default ConcatData;
