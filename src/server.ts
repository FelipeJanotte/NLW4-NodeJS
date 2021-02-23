import express, { request, response } from "express";

const app = express();

/**
 * GET    => Busca - app.get()
 * POST   => Salvar
 * PUT    => Alterar
 * DELETE => Deletar
 * PATCH  => Alteração específica 
 */

// http://localhost:3333/users
app.get("/", (request, response) => {
    return response.json({message: "Hello World - NLW"})
});

// 1 param => Rota(Recurso API)
// 2param => request, response
app.post("/", (request, response) => {
    // Recebeu os dados para Salvar
    return response.json({message:"Os dados foram salvos com sucesso!"})
})

app.listen(3333, () => console.log("Server is running!"))