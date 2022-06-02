let tarefas = []

const addTarefa = () => {
    let tarefa = document.getElementById('tarefa').value
    tarefas.push(tarefa)
    document.getElementById('tarefa').value = ""

    if(localStorage.getItem('tarefas')!= null){
        tarefas = JSON.parse(localStorage.getItem('tarefas'))
    }
    let data = new Date();
    let date = `${data.getUTCDay()}/${data.getUTCMonth()}/${data.getUTCFullYear()}`;
     tarefas.push([date, tarefa])
     localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

const list = () => {
    let tbody = document.querySelector('#tr-tarefa')
    
   if (localStorage.getItem('tarefas') != null){
       tarefas=JSON.parse(localstorage.getItem('tarefas'))
   } else {
    tarefas.push(["sem dados","sem dados"])
   }
   array.forEach( element => {
    tbody.innerHTML += "<tr><td>" +element[0]+ "</td><td>" +element[1]+"</td></tr>"
   });
    
}