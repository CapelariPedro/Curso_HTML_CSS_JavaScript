# **Sistema de Gestão de Estoque - Supermercado**  

## **Descrição**  
Este projeto é um **Sistema de Gestão de Estoque para Supermercado**, desenvolvido com **Node.js, Express e MongoDB** no **backend**, e **HTML, CSS e jQuery** no **frontend**.  

O sistema permite:  
- **Cadastrar novos produtos** no estoque.  
- **Listar todos os produtos disponíveis**.  
- **Editar produtos existentes**.  
- **Remover produtos do estoque**.  
- **Atualizar quantidades de produtos em tempo real**.  
- **Interface responsiva (Mobile First)**.  

---

## **Estrutura do Projeto**  

```
supermercado-estoque/  
│── backend/  
│   ├── server.js  
│   ├── models/  
│   │   ├── Produto.js  
│   ├── routes/  
│   │   ├── produtos.js  
│   ├── .env  
│   ├── package.json  
│── frontend/  
│   ├── index.html  
│   ├── cadastro.html  
│   ├── consulta.html  
│   ├── style.css  
│   ├── script.js  
│── README.md  
```

---

## **Configuração do Backend (Node.js, Express, MongoDB)**  

### **1. Instalar Node.js e MongoDB**  
Caso ainda não tenha, baixe e instale:  

[Node.js](https://nodejs.org/)  
[MongoDB](https://www.mongodb.com/try/download/community)  

### **2. Criar e Configurar o Backend**  

```bash
mkdir supermercado-estoque
cd supermercado-estoque
mkdir backend
cd backend
npm init -y
npm install express mongoose cors body-parser dotenv
```

### **3. Configurar as Variáveis de Ambiente**  
Criar um arquivo `.env` na pasta `backend` e adicionar a conexão com o MongoDB:  

```
MONGO_URI=mongodb://localhost:27017/supermercado
```

### **4. Rodar o Backend**  

```bash
cd backend
node server.js
```

Se desejar rodar automaticamente ao salvar alterações, instale o `nodemon`:  

```bash
npm install -g nodemon
nodemon server.js
```

---

## **Configuração do Frontend (HTML, CSS, jQuery)**  

Criar a pasta `frontend/` dentro do diretório `supermercado-estoque/`, adicionar os arquivos necessários e rodar o frontend abrindo `index.html` no navegador.  

---

## **Erros Comuns e Soluções**  

### **Erro: Cannot find module 'express'**
**Causa:** As dependências do Node.js não estão instaladas.  
**Solução:** Execute o seguinte comando na pasta `backend/`:  

```bash
npm install
```

---

### **Erro: Cannot find module 'server.js'**
**Causa:** O arquivo `server.js` não existe ou você está na pasta errada.  
**Solução:**  
1. Verifique se `server.js` está na pasta `backend/`.  
2. Certifique-se de estar na pasta correta antes de rodar o servidor:  

```bash
cd backend
node server.js
```

---

### **Erro: MongoDB connection failed**
**Causa:** O MongoDB não está rodando ou a string de conexão está incorreta.  
**Solução:**  
1. Verifique se o MongoDB está ativo:  

```bash
mongod
```

2. Confirme a string de conexão no arquivo `.env`.  

---

### **Erro: Server already in use**
**Causa:** A porta configurada já está em uso.  
**Solução:**  
1. Pare qualquer processo que esteja rodando na porta 5000:  

```bash
npx kill-port 5000
```

2. Altere a porta no arquivo `server.js` e reinicie o servidor.  

---

## **Executando o Projeto**  

1. **Inicie o backend:**  
```bash
cd backend
node server.js
```

2. **Abra `index.html` no navegador** para acessar o frontend.  

O sistema agora estará pronto para uso.