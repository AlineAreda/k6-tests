# 💻 Exemplo testes de performance com k6

## 📊 Requisitos não funcionais

### Cadastro

- ✅ Cadastro com sucesso deve ocorrer em até 2 segundos
- ✅ Cadastros com falha devem ocorrer acima de 2 segundos
- ✅ Cadastrar até 100 usuários simultâneos
- ✅ A margem de erro até 1%

## 🚀 Tecnologias

- [Node.js] - plataforma de desenvolvimento
- [Express] - framework onde a API foi construída
- [MongoDB] - Banco de dados (Não relacional)
- [k6] - ferramenta para teste de carga, performance, stress etc...

## 👨🏻‍💻 Como executar o projeto

[Node.js](https://nodejs.org/) v16 ou superior para executar.

Para liberar o gerenciador de pacotes Yarn:

```
corepack enable
```

Execute o comando abaixo para instalar as dependências do projeto:

```sh
yarn install
yarn dev
```

Execute o comando subir a API:
```sh
yarn dev
```

### **Executar os Testes**

Para rodar os testes, execute:

```
K6 run <arquivo.js>
```

Feito com ❤️ por [Aline Areda](https://github.com/AlineAreda) 😊  
📌 _Contribuições são bem-vindas!_