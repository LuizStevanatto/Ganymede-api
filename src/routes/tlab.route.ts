import { Router } from "express";
import tlabController from "../usecases/tlab/tlab.controller";

const tlabRouter = Router();

tlabRouter.get("/", (req, res) => {
	res.send("Hello from TLAB");
});

tlabRouter.get("/invoicing", tlabController.invoicingTLAB);

export { tlabRouter };
