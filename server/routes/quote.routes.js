const express = require("express");

const { listQuotes, getQuote } = require("../controllers/quote.controllers.js");

const router = express.Router();

// Rota para listar cotações
router.get("/quotes/list", listQuotes);

// Rota para buscar cotação de um ativo financeiro
router.get("/quote/:tickers", getQuote);

module.exports = router;
