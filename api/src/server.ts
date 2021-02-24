import express from 'express';

const app = express();

app.get("/users", (request, response) => {
    return response.json({message: 'Hello, world - NLW04!'})
});

app.post("/", (request, response) => {
    return response.json({message: "Os dados foram salvos com sucesso"})
})

app.listen(3003, () => console.log("Server is running!"));