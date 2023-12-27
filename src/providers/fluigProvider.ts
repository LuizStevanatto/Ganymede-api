// api.js
import axios from "axios";
import crypto from "crypto";
import OAuth from "oauth-1.0a";
import https from "https";

interface IFluigProvider {
	consumerKey: string;
	consumerSecret: string;
	tokenKey: string;
	tokenSecret: string;
	baseURL: string;
}

class FluigProvider {
	oauth: any;
	consumerKey: string;
	consumerSecret: string;
	tokenKey: string;
	tokenSecret: string;
	baseURL: string;

	constructor(private readonly provider: IFluigProvider) {
		const { consumerKey, consumerSecret, tokenKey, tokenSecret, baseURL } = provider;

		this.consumerKey = consumerKey;
		this.consumerSecret = consumerSecret;
		this.tokenKey = tokenKey;
		this.tokenSecret = tokenSecret;
		this.baseURL = baseURL;

		this.oauth = new OAuth({
			consumer: {
				key: consumerKey,
				secret: consumerSecret,
			},
			signature_method: "HMAC-SHA1",
			hash_function(base_string, key) {
				return crypto.createHmac("sha1", key).update(base_string).digest("base64");
			},
		});
	}

	async makeRequest(url: string, method: string, data = null) {
		const request_data = {
			url: this.baseURL,
			method: "GET",
		};

		const authHeader = this.oauth.toHeader(
			this.oauth.authorize(request_data, {
				key: this.provider.tokenKey,
				secret: this.provider.tokenSecret,
			})
		);

		const agent = new https.Agent({
			rejectUnauthorized: false,
		});

		const config = {
			url,
			httpsAgent: agent,
			baseURL: "https://fluigteste.ncc.com.br/api/public/ecm/dataset",
			timeout: 5000,
			headers: {
				...authHeader,
				"Content-Type": "application/json",
			},
			data,
		};

		const res = await axios(config);
		return res.data.content;
	}
}

export default FluigProvider;
