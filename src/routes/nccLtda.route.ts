import { Router } from "express";
import nccLtdaController from "../usecases/nccLtda/nccLtda.controller";

const nccLtdaRouter = Router();

nccLtdaRouter.get("/invoicing", nccLtdaController.invoicingNccLtda);

export { nccLtdaRouter };
