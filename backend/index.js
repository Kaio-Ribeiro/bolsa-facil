import express from "express";
import { config } from "dotenv";

import quoteRoutes from "./routes/quote.routes.js";

config({ path: "./.env" });
const app = express();

app.use("/api", quoteRoutes);

const PORT = process.env.PORT || 5000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
