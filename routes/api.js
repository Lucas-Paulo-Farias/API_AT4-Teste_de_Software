const express = require('express')
const router = express.Router();
const db = require('../db')


// ===============================
//     ROTAS    
// ===============================

// Buscar todos os usuários
router.get('/', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, result) => {
        if (err) return res.status(500).json({ mensagem: "Erro interno do servidor." })
        res.json(result)
    })
})

// Buscar usuário pelo id
router.get('/:id', (req, res) => {
    const {id} = req.params
    db.query('SELECT * FROM usuarios WHERE id = ?', [id],
        (err, result) => {
            if(err) return res.status(500).json({ mensagem: "Erro interno do servidor." })
            if(result.length === 0) return res.status(404).json({message: 'Usuário não encontrado!'})
            res.json(result[0])
        }
    )
});

// Crir novo usuário
router.post('/', (req, res) => {
    const {nome, email} = req.body
    db.query('INSERT INTO usuarios (nome, email) VALUES (?, ?)', [nome, email],
        (err, result) => {
            if (err) return res.status(500).json({ mensagem: "Erro interno do servidor." })
            res.status(201).json({id: result.insertId, nome, email})
        }
    )
})

// Atualizar usuário
router.put('/:id', (req, res) => {
    const {nome, email} = req.body
    const {id} = req.params
    db.query('UPDATE usuarios SET nome = ?, email = ? WHERE id = ?', [nome, email, id],
        (err, result) => {
            if(err) return res.status(500).json({ mensagem: "Erro interno do servidor." })
            if(result.affectedRows === 0) return res.status(404).json({message: 'Usuário não encontrado!'})
            res.json({id, nome, email})
        }
    )
})

// Deletar usuário
router.delete('/:id', (req, res) => {
    const {id} = req.params
    db.query('DELETE FROM usuarios WHERE id = ?', [id],
        (err, result) => {
            if(err) return res.status(500).json({ mensagem: "Erro interno do servidor." })
            if(result.affectedRows === 0) return res.status(404).json({message: 'Usuário não encontrado!'})
            res.status(204).json({message: 'Usuário deletado!'})
        }
    )
})

module.exports = router