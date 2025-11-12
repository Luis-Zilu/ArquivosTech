// let usuario;

// if(usuario != '')
// {
//     usuario = "faca login";
// }

// const nome = document.getElementById('nome');
// const sobrenome = document.getElementById('sobrenome');

// document.getElementById('nome_usuario').innerHTML = usuario;

// function alerta_forms(){
//     usuario = nome.value;
//     alert('Obrigado pelo cadastro '+ usuario +', você foi matriculado na turma de: '+sobrenome.value+"!");
    
// }

const inputNome = document.getElementById("nome");
const inputTurma = document.getElementById("turma");
const listaDeAlunos = document.getElementById("nomes");
const botaoAdicionar = document.getElementById("adicionarNome");

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    if (inputNome.value === "" && inputTurma.value === "") {
        alert("Por favor, insira um nome e uma turma!");
        return
    }
    if (inputNome.value === "") {
        alert("Por favor, insira um nome!");
        return
    }
    if (inputTurma.value === "") {
        alert("Por favor, insira uma turma!");
        return
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const nomeNome = document.createElement("p");
    nomeNome.innerText = inputNome.value+" se matriculou no curso de: "+inputTurma.value+"!";
    // const nomeTurma = document.createElement("p");
    // nomeTurma.innerText = inputTurma.value+"!";

    containerItemDaLista.appendChild(nomeNome);
    // containerItemDaLista.appendChild(nomeTurma);

    itemDaLista.appendChild(containerItemDaLista)
    listaDeAlunos.appendChild(itemDaLista)

})