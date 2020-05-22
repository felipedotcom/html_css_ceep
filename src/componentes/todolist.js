(() => {
  const criarTarefa = (e) => {
    e.preventDefault();

    const lista = document.querySelector(".list");

    const input = document.querySelector(".form-input");
    const valor = input.value;

    console.log(valor); //Preserv log aula2 video2

    const conteudo = `<p class="conteudo">${valor}</p>`;
    const tarefa = document.createElement("li");
    tarefa.classList.add("task");

    tarefa.innerHTML = conteudo; //vou usar p conteudo que nao mude, muda inteiro e nao parcial
    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa);
    /*  const botaoCheck = document.createElement("button");
    botaoCheck.classList.add("check-button");
  
    lista.appendChild(botaoCheck);
  
    const botaoDelete = document.createElement("button");
    botaoDelete.classList.add("material-icons");
    botaoDelete.innerText = "delete";
  
    lista.appendChild(botaoDelete);
  
    ul.appendChild(lista);
  
    valor.value = ""; */
  };

  const novaTarefa = document.querySelector(".form-button"); //form

  novaTarefa.addEventListener("click", criarTarefa);

  const BotaoConclui = (e) => {
    const botaoConclui = document.createElement("button");
    botaoConclui.classList.add("check-button");
    botaoConclui.innerText = "concluir";
    botaoConclui.addEventListener("click", concluirTarefa);
    return botaoConclui;
  };

  const concluirTarefa = (event) => {
    const botaoConclui = event.target;

    const tarefaCompleta = botaoConclui.parentElement;
    tarefaCompleta.classList.toggle("done");
  };

  const BotaoDeleta = (e) => {
    const botaoDeleta = document.createElement("button");
    botaoDeleta.classList.add("delete-button"); //criar essa classe

    botaoDeleta.innerText = "deletar";
    botaoDeleta.addEventListener("click", deletarTarefa);
    return botaoDeleta;
  };

  const deletarTarefa = (event) => {
    const botaoDeleta = event.target;

    const tarefaCompleta = botaoDeleta.parentElement;
    tarefaCompleta.remove();
  };
})();
