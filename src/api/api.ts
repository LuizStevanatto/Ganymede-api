import Axios, { AxiosInstance } from "axios";
import https from "https";

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
