let lista = document.getElementById("lista")
let botao = document.getElementById("adicionar")

//recuperar informacoes
let tarefas_salvas = localStorage.getItem("tarefas");
let tarefas = JSON.parse(tarefas_salvas) || [];
console.log(tarefas);


for(let i = 0;i < tarefas.length; i++){
    //cria o item
    let recuperando = document.createElement("li")
    recuperando.textContent = (tarefas[i])
    lista.appendChild(recuperando)
    
    //botao de remover
    let remove = document.createElement('button')
    remove.className = 'botao'
    remove.textContent = 'X'
    recuperando.appendChild(remove)

    //evento
    remove.addEventListener("click", function(){
        let texto = recuperando.firstChild.textContent
        recuperando.remove()
        let index = tarefas.indexOf(texto)

        //pega o indice
        if(index >-1){
            tarefas.splice(index, 1)
        }

        //salva
        let tarefas_string = JSON.stringify(tarefas)
        localStorage.setItem('tarefas', tarefas_string)
        console.log(tarefas)
    })
}

//recuperando = item recuperado
//tarefa: o que eu digito
//item: conteudo da lista
//tarefas: array
//remover: botao
//lista: a lista de tarefas inteira

//funcao do botao
botao.addEventListener("click", function(){
    let tarefa = document.getElementById("tarefa").value
    if(tarefa == ""){} // nao permite tarefas vazias

    else{
        let item = document.createElement("li")//cria o elemento <li> na variavel item
        let remover = document.createElement("button")// cria o elemento <button> na variavel botao
        remover.className = 'botao'
        item.textContent = tarefa // define a entrada do usuario como tarefa
        lista.appendChild(item)// Adiciona a entrada do usuario na lista

        tarefas.push(tarefa)//adiciona tarefa em tarefas
        let tarefas_string = JSON.stringify(tarefas)// transforma o array em string
        localStorage.setItem('tarefas', tarefas_string)// guarda o array como string
        console.log(tarefas)
        
        item.appendChild(remover)//adiciona o botao junto ao item
        remover.textContent = "X"//texto do botao
        tarefa = document.getElementById("tarefa").value = ""//limpa o texto ao enviar, deixando o valor ""
        
        //evento
        remover.addEventListener("click", function(){
            let txt = item.firstChild.textContent
            item.remove()

            //pega o indice
            let indice = tarefas.indexOf(txt)
            tarefas.splice(indice, 1)//tira o item
            
            //salva
            let tarefas_string = JSON.stringify(tarefas)
            localStorage.setItem('tarefas', tarefas_string)
        })
    }
})
