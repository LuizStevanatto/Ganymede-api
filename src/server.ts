import { app } from "./app";
import "reflect-metadata";
import * as dotenv from "dotenv";
import * as os from "os";

dotenv.config();

const PORT = process.env.PORT || 3333;

import "./database/connection";

app.listen(PORT, () => {
	const networkInfo = os.networkInterfaces();
	console.log(networkInfo); // objeto
	console.log(networkInfo.Ethernet[0].address); // ip
	console.log(`Server is running on PORT:${PORT}`);
});
