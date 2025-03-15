import express from "express";

import { listQuotes } from "../controllers/quote.controllers.js";

const router = express.Router();

// Rota para listar cotações
router.get("/quote/list", listQuotes);

export default router;
