# Gerenciamento de Peças

Aplicativo de controle de estoque de peças para oficina mecânica, com catálogo hierárquico de marcas, modelos, anos e versões.

## Objetivo

Permitir que o usuário organize e mantenha o inventário de peças por veículo, usando uma estrutura de dados em árvore e gravação direta em arquivo.

## Como funciona

A aplicação apresenta um fluxo em níveis:

- Marca: lista de fabricantes registrados
- Modelo: veículos vinculados à marca
- Ano: ano de fabricação do veículo
- Versão: variações do veículo
- Peças: itens relacionados a uma versão específica

Cada item pode ser criado ou removido no nível atual, mantendo a relação entre marca, modelo, ano e versão.

## Busca

A aplicação fornece busca rápida em dois níveis:

- **Marcas**: busca por nome da marca ou encontra marcas que contenham modelos com o termo pesquisado
- **Modelos**: dentro da marca selecionada, busca modelos pelo nome

A busca é em tempo real e atualiza os resultados conforme você digita.

## Funcionalidades

- cadastro de marcas e veículos em hierarquia
- exclusão de marcas, modelos, anos e versões
- adição, edição e exclusão de peças
- **busca de marcas** por nome da marca ou do modelo associado
- **busca de modelos** dentro da marca selecionada
- filtro de peças por categoria
- validação de dados básicos ao cadastrar anos e peças
- exibição de estoque e estado de peças

## Persistência de dados

Os dados são mantidos em `dados.json`. A aplicação sincroniza alterações com uma API local, garantindo que itens removidos permaneçam apagados depois de recarregar a página.

Quando a API local não estiver disponível, a aplicação utiliza um cache local para preservar temporariamente as alterações.

## Estrutura do projeto

- `index.html`: interface do usuário e lógica de navegação
- `server.js`: servidor local que expõe a API para leitura e gravação de `dados.json`
- `dados.json`: base de dados que armazena marcas, versões e peças
- `package.json`: definição do projeto e dependências

## Uso esperado

O usuário navega pelo catálogo de veículos e escolhe a versão desejada para gerenciar as peças associadas. As exclusões e alterações são gravadas em arquivo de dados.
