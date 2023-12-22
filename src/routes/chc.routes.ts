import { Router } from "express";

const chcRouter = Router();

chcRouter.get("/", (req, res) => {
	res.send("Hello from CHC");
});

export { chcRouter };
