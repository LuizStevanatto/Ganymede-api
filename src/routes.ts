import { Router } from "express";
import { chcRouter } from "./routes/chc.routes";
import { nccAssRouter } from "./routes/nccAss.route";
import { nccLtdaRouter } from "./routes/nccLtda.route";
import { tlabRouter } from "./routes/tlab.route";

const router = Router();

router.use("/chc", chcRouter);
router.use("/nccAss", nccAssRouter);
router.use("/nccLtda", nccLtdaRouter);
router.use("/tlab", tlabRouter);

router.get("/", async (request, response) => {
	console.log("APIII");

	return response.status(200).send({ message: "Main Route Ganymede" });
});

router.get("/ping", async (request, response) => {
	return response.send("PONG 🏓");
});

export { router };
