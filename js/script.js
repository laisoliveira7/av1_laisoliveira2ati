<<<<<<< HEAD
// Pegando os elementos do HTML
const form = document.querySelector("#formMensagem"); // formulário
const input = document.querySelector("#mensagem"); // onde digita a mensagem
const erro = document.querySelector("#erro"); // onde aparece erro
const lista = document.querySelector("#lista"); // lista das mensagens

// Tipo um "banco de dados" simples (só funciona enquanto a página tá aberta)
let mensagens = []; // guarda as mensagens
let proximoId = 1; // cada mensagem tem um número único

// Função que verifica se o texto é válido
function validarTexto(texto) {
  const txt = texto.trim(); // tira espaços antes/depois

  // Se estiver vazio, mostra erro
  if (txt === "") {
    erro.textContent = "A mensagem não pode estar vazia.";
    return false; // não deixa continuar
  }

  erro.textContent = ""; // limpa o erro se estiver tudo certo
  return true; // pode continuar
}

// Função para editar uma mensagem
function editar(id) {
  // procura a mensagem pelo id
  const msg = mensagens.find(m => m.id === id);

  // abre uma caixinha para editar o texto
  const novoTexto = prompt("Edite a mensagem:", msg.texto);
  
  // se não cancelou e o texto é válido
  if (novoTexto !== null && validarTexto(novoTexto)) {
    msg.texto = novoTexto.trim(); // atualiza o texto
    render(); // atualiza a lista na tela
  }
}

// Função para excluir uma mensagem
function excluir(id) {
  // pergunta antes de apagar
  if (confirm("Tem certeza que deseja excluir esta mensagem?")) {
    // remove a mensagem da lista
    mensagens = mensagens.filter(m => m.id !== id);
    render(); // atualiza na tela
  }
}

// Função que mostra as mensagens na tela
function render() {
  lista.innerHTML = ""; // limpa tudo antes de recriar

  // passa por cada mensagem
  for (const msg of mensagens) {
    const li = document.createElement("li"); // cria um item da lista
    li.textContent = msg.texto; // coloca o texto
    
    // botão editar
=======
const form = document.querySelector("#formMensagem");
const input = document.querySelector("#mensagem");
const erro = document.querySelector("#erro");
const lista = document.querySelector("#lista");

// "Banco de dados"
let mensagens = [];
let proximoId = 1;

// Função para validar texto
function validarTexto(texto) {
  const txt = texto.trim();

  if (txt === "") {
    erro.textContent = "A mensagem não pode estar vazia.";
    return false;
  }

  erro.textContent = "";
  return true;
}

// Função para editar
function editar(id) {
  const msg = mensagens.find(m => m.id === id);
  const novoTexto = prompt("Edite a mensagem:", msg.texto);
  
  if (novoTexto !== null && validarTexto(novoTexto)) {
    msg.texto = novoTexto.trim();
    render();
  }
}

// Função para excluir
function excluir(id) {
  if (confirm("Tem certeza que deseja excluir esta mensagem?")) {
    mensagens = mensagens.filter(m => m.id !== id);
    render();
  }
}

// Função para renderizar a lista
function render() {
  lista.innerHTML = "";

  for (const msg of mensagens) {
    const li = document.createElement("li");
    li.textContent = msg.texto;
    
>>>>>>> 6dbf88a9781b993817de8fbe34297619d50beac0
    const botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar";
    botaoEditar.addEventListener("click", () => editar(msg.id));
    
<<<<<<< HEAD
    // botão excluir
=======
>>>>>>> 6dbf88a9781b993817de8fbe34297619d50beac0
    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.addEventListener("click", () => excluir(msg.id));
    
<<<<<<< HEAD
    // coloca os botões dentro do item
    li.appendChild(botaoEditar);
    li.appendChild(botaoExcluir);

    // coloca o item na lista
=======
    li.appendChild(botaoEditar);
    li.appendChild(botaoExcluir);
>>>>>>> 6dbf88a9781b993817de8fbe34297619d50beac0
    lista.appendChild(li);
  }
}

<<<<<<< HEAD
// Quando o formulário é enviado
form.addEventListener("submit", (event) => {
  event.preventDefault(); // impede a página de recarregar

  const textoDigitado = input.value; // pega o que foi digitado

  // valida o texto
  if (!validarTexto(textoDigitado)) {
    return; // para se estiver errado
  }

  // adiciona nova mensagem
=======
// Evento de envio do formulário
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const textoDigitado = input.value;

  if (!validarTexto(textoDigitado)) {
    return;
  }

>>>>>>> 6dbf88a9781b993817de8fbe34297619d50beac0
  mensagens.push({
    id: proximoId,
    texto: textoDigitado.trim()
  });

<<<<<<< HEAD
  proximoId++; // aumenta o id
  render(); // atualiza a lista

  input.value = ""; // limpa o campo
=======
  proximoId++;
  render();

  input.value = "";
>>>>>>> 6dbf88a9781b993817de8fbe34297619d50beac0
});