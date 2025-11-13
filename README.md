# Plataforma de Gestão para Microempreendedores (Marketplace B2B)

## Technologies Used

* Node.js
* Express
* MongoDB
* Mongoose
* Yup

## System Description

Uma plataforma B2B para conectar microempreendedores, permitindo a gestão de produtos, vendas, estoque e finanças. O sistema cobre operações comerciais, finanças, logística e gerenciamento de usuários, com foco em validações de dados como CPF/CNPJ, pagamentos e produtos.

## Implemented Functionalities

[List the functionalities implemented in the API.]

## Endpoints

[List the API endpoints with request/response examples.]

## Database Modeling

![Database Diagram](docs/diagram.png)

### Collections and Relationships

**Entidades:**

*   **Usuários (clientes):** Armazena informações dos clientes que compram na plataforma.
*   **Vendedores (lojas):** Representa as lojas ou microempreendedores que vendem produtos.
*   **Produtos:** Itens disponíveis para venda no marketplace.
*   **Categorias:** Classificação dos produtos (ex: eletrônicos, vestuário).
*   **Inventários:** Controla o estoque de cada produto por vendedor.
*   **Pedidos:** Registra as ordens de compra feitas pelos usuários.
*   **Itens do Pedido:** Detalha os produtos incluídos em cada pedido.
*   **Faturas / Pagamentos:** Gerencia as transações financeiras associadas aos pedidos.
*   **Avaliações (reviews):** Feedback dos usuários sobre os produtos.
*   **Endereços:** Armazena os endereços de entrega dos usuários.
*   **Cupons / Descontos:** Códigos promocionais aplicáveis às compras.

**Principais Relações:**

*   **Produtos** se relacionam com **Categoria** (um produto pertence a uma categoria).
*   **Produto** se relaciona com **Vendedor** (um vendedor cadastra múltiplos produtos).
*   **Inventário** se relaciona com **Produto** e **Vendedor** (controla o estoque de um produto para um vendedor específico).
*   **Pedido** se relaciona com **Usuário** e **Endereço** (um pedido é feito por um usuário para um endereço de entrega).
*   **Itens do Pedido** se relaciona com **Pedido** e **Produto** (um item de pedido pertence a um pedido e se refere a um produto).
*   **Fatura** se relaciona com **Pedido** (uma fatura é gerada para um pedido).
*   **Avaliação** se relaciona com **Produto** e **Usuário** (uma avaliação é feita por um usuário para um produto).

## Installation, Configuration, and Execution

[Provide instructions on how to install, configure, and run the project.]

### Database Connection

[Explain how to set up the database connection.]

## Team Members

* **Full Name:** [GitHub Username](https://github.com/username)
* **Full Name:** [GitHub Username](https://github.com/username)
* **Full Name:** [GitHub Username](https://github.com/username)

## Contributions

* **Member 1:**
    * Developed Collections/CRUDs: [...]
    * Implemented Functionalities: [...]
    * Elaborated Documentation Parts: [...]
    * Resolved Issues: [...]
* **Member 2:**
    * Developed Collections/CRUDs: [...]
    * Implemented Functionalities: [...]
    * Elaborated Documentation Parts: [...]
    * Resolved Issues: [...]
* **Member 3:**
    * Developed Collections/CRUDs: [...]
    * Implemented Functionalities: [...]
    * Elaborated Documentation Parts: [...]
    * Resolved Issues: [...]
