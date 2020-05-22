const novaTarefa = document.querySelector(".form-button"); //form
const lista = document.querySelector(".list");

const criarTarefa = (e) => {
  console.log( e ) // Aula 2 video 3
  e.preventDefault()
  const input = document.querySelector(".form-input")
  const valor = input.value

  console.log( valor )  //Preserv log aula2 video2
  
  const tarefa = `<li class="task">
                      <p class="conteudo">${valor}</p> 
                  </li>` //Aula 3 video 1 alura mais 
  lista.innerHTML = tarefa
  lista.appendChild(tarefa)
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


novaTarefa.addEventListener("click", criarTarefa);

/* const deletarTarefa = (event) => {
  const tarefa = event.target;
	console.log(tarefa.classList)
  if (tarefa.classList.contains("material-icons")) {
    const tarefaList = tarefa.parentElement;
    tarefaList.remove();
  }
};

ul.addEventListener("click", deletarTarefa);

const marcarTarefaCompletada = (event) => {
  const tarefaCompleta = event.target;

  if (tarefaCompleta.contains("check-button")) {
    const tarefaList = tarefaCompleta.parentElement;
    tarefaList.classList.toggle("done");
  }
};

ul.addEventListener("click", marcarTarefaCompletada); */
 