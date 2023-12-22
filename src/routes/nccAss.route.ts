import { Router } from "express";

const nccAssRouter = Router();

nccAssRouter.get("/", (req, res) => {
	res.send("Hello from NCC Associação");
});

export { nccAssRouter };
