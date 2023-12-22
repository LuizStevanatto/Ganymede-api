export default interface IRequestData {
	razaoSocialFatura: string;
	cnpjFatura: string;
	valorTotalNota: string;
	formaPagamento: string;
	condicaoPagamento: null;
	codCentroCusto: string;
	contaContabil: string;
	numPurchaseOrder: string;
	regraRetencaoPCC: string;
	descricaoNota: string;
	moedaCambio: string;
	numParcelas: string;
	faturar: string;
	NUM_PROCES: number;
	version: number;
	emailFatura: any;
}
