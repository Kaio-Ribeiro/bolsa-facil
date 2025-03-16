import express from "express";

import { listQuotes, getQuote } from "../controllers/quote.controllers.js";

const router = express.Router();

// Rota para listar cotações
router.get("/quotes/list", listQuotes);

// Rota para buscar cotação de um ativo financeiro
router.get("/quote/:tickers", getQuote);

export default router;
