# Lista de Tarefas

Este é um projeto simples de uma lista de tarefas (To-Do List) desenvolvido como parte da AV1 para a disciplina de programação. A aplicação permite adicionar, editar, excluir e marcar tarefas como concluídas, tudo funcionando diretamente no navegador sem necessidade de servidor.

## Funcionalidades

- **Adicionar tarefas**: Digite uma tarefa no campo de entrada e clique em "Adicionar".
- **Editar tarefas**: Clique no botão "Editar" de uma tarefa existente para modificá-la.
- **Excluir tarefas**: Clique no botão "Excluir" para remover uma tarefa da lista.
- **Marcar como concluída**: Clique em "Concluir" para marcar uma tarefa como feita (ela ficará riscada e com opacidade reduzida). Use "Desmarcar" para reverter.
- **Validação**: O campo não pode estar vazio; caso contrário, uma mensagem de erro será exibida.
- **Responsividade**: A interface é adaptada para dispositivos móveis.

## Como executar

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` em qualquer navegador web moderno (como Chrome, Firefox ou Edge).
3. A aplicação funcionará imediatamente, sem necessidade de instalação de dependências ou servidor.

## Estrutura do projeto

- `index.html`: Arquivo principal da página web, contendo a estrutura HTML.
- `css/style.css`: Arquivo de estilos CSS para a aparência da página (fundo roxo, centralização, etc.).
- `js/script.js`: Arquivo JavaScript com a lógica da aplicação (manipulação do DOM, validação, etc.).

## Tecnologias utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização e layout responsivo.
- **JavaScript (Vanilla)**: Lógica interativa sem frameworks.

## Autor

Desenvolvido por Lais Oliveira como parte da AV1.

## Notas

- Os dados são armazenados apenas na memória do navegador (variável `mensagens` em JavaScript), então as tarefas serão perdidas ao recarregar a página.
- Para uma versão mais avançada, considere adicionar persistência com LocalStorage ou um backend.
