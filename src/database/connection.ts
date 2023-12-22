// Create connection with typerorm to connect with database

import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

const dataSource = new DataSource({
	type: String(process.env.DB_TYPE) as any,
	host: String(process.env.DB_HOST),
	port: Number(process.env.DB_PORT),
	username: String(process.env.DB_USER),
	password: String(process.env.DB_PASSWORD),
	database: String(process.env.DB_NAME),
	extra: {
		ssl: {
			rejectUnauthorized: false,
		},
	},
	options: { encrypt: false },
	requestTimeout: 30000,
});

dataSource
	.initialize()
	.then(() => {
		console.log("Data Source has been initialized!");
	})
	.catch((err) => {
		console.error("Error during Data Source initialization", err);
	});

export default dataSource;
