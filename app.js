const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.send("API de CRUD de Usuários");
});

const userRoutes = requires(",/routes/usuarios");
app.use("/api", userRoutes);

const PORT = process.env.PORT  || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});