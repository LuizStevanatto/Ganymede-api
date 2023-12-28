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
	obs: string;
	moedaCambio: string;
	numParcelas: string;
	faturar: string;
	numProcess: number;
	version: number;
	emailFatura: any;
}
