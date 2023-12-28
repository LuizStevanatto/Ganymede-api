import Axios, { AxiosInstance } from "axios";
import https from "https";

import * as dotenv from "dotenv";

dotenv.config();

const IvrimApi: AxiosInstance = Axios.create({
	baseURL: process.env.IVRIM_URL,
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${process.env.IVRIM_TOKEN}`,
	},
	httpsAgent: new https.Agent({
		rejectUnauthorized: false,
	}),
	proxy: false,
});

IvrimApi.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

IvrimApi.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default IvrimApi;
