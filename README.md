# API de Usuários - Relatório de Testes
## Este documento apresenta as evidências de teste para a API de gerenciamento de usuários, conforme solicitado. Os testes foram realizados utilizando a ferramenta [Postman/Insomnia].
  ---   

## 1. 🚀 Buscar todos os usuários
Método: GET

Endpoint: http://localhost:3000/usuarios

Descrição: Retorna a lista completa de usuários cadastrados.

### Evidência (Print): ![Evidência do GET /usuarios](https://i.imgur.com/4Dhnobt.png)

Resultado: Status 200 OK  

---
## 2. ➕ Criar novo usuário
Método: POST

Endpoint: http://localhost:3000/usuarios

Descrição: Cria um novo usuário com os dados enviados no corpo (body) da requisição.

Request Body (JSON):
```JSON
{
  "nome": "Eduarda",
  "email": "eduarda@email.com"
}
```
### Evidência (Print): ![Evidência do POST /usuarios](https://i.imgur.com/lRHMzPE.png)

Resultado: Status 201 Created

---
## 3. 🔄 Atualizar usuário
Método: PUT

Endpoint: http://localhost:3000/usuarios/{id}

Descrição: Atualiza os dados de um usuário existente baseado no id fornecido.

Request Body (JSON):
```JSON
{
  "nome": "Eduarda",
  "email": "duda@email.com"
}
```
### Evidência (Print): ![Evidência do PUT /usuarios/{id}](https://i.imgur.com/LNA1rud.png)

Resultado: Status 200 OK

---
## 4. ❌ Deletar usuário
Método: DELETE

Endpoint: http://localhost:3000/usuarios/{id}

Descrição: Remove um usuário do banco de dados baseado no id fornecido.

### Evidência (Print): ![Evidência do DELETE /usuarios{id}](https://i.imgur.com/vjTFrnX.png)

Resultado: Status 204 No Content

---
## 5. 🎬 Vídeo de Demonstração

Caso prefira, você pode assistir a todos os testes dos endpoints sendo executados em tempo real no link abaixo:

[![Assistir à demonstração da API em vídeo](https://i.imgur.com/JzbFzvB.png)](https://youtu.be/P2QPqd3Uva4)
