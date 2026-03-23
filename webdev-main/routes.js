const express = require("express")
const router = express.Router()

// Página inicial
router.get("/", (req, res) => {
    res.render("index")
})

// Sobre
router.get("/sobre/:id", (req, res) => {
    const id = req.params.id
    res.render("sobre", { id })
})

// Contato
router.get("/contato/:id", (req, res) => {
    const id = req.params.id
    res.render("contato", { id })
})

// Serviços
router.get("/servicos/:id", (req, res) => {
    const id = req.params.id
    res.render("servicos", { id })
})

module.exports = router