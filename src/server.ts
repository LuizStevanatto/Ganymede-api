import { app } from "./app";
import "reflect-metadata";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
	console.log(`Server is running on PORT:${PORT}`);
});
