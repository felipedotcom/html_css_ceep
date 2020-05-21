const novaTarefa = document.querySelector(".form-button");
const ul = document.querySelector(".list")
const input = document.querySelector('.form-input')

const adicionaTarefar = (evento) => {

	evento.preventDefault()

  const lista = document.createElement("li");
  lista.classList.add("task");

	const paragrafo = document.createElement('p')
	paragrafo.classList.add('conteudo')
	paragrafo.textContent = input.value

	lista.appendChild(paragrafo)

	const botaoCheck = document.createElement('button')
	botaoCheck.classList.add('check-button')

	lista.appendChild(botaoCheck)

	const botaoDelete = document.createElement('button')
	botaoDelete.classList.add('material-icons')
	botaoDelete.innerText = 'delete'

	lista.appendChild(botaoDelete)
	

	ul.appendChild(lista)

	input.value = ""
	
};

novaTarefa.addEventListener("click", adicionaTarefar)

const deletarTarefa = (event) => { 
	const tarefa = event.target

	if(tarefa.classList[0] ==='material-icons'){ 
		const tarefaList = tarefa.parentElement
		tarefaList.remove()
	}
}

ul.addEventListener('click', deletarTarefa)


const marcarTarefaCompletada = (event) => { 
	const tarefaCompleta = event.target

	if(tarefaCompleta.classList[0] === 'check-button'){
		const tarefaList = tarefaCompleta.parentElement
		tarefaList.classList.toggle('done')
	}
}

ul.addEventListener('click', marcarTarefaCompletada)