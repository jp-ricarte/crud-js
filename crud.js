
function valor1(){
    var table = document.getElementById("tabela");   
    var row = table.insertRow();
    
    var a = row.insertCell();
    var b = row.insertCell();
    var c = row.insertCell();
    var d = row.insertCell();
    var e = row.insertCell();
    var edit = row.insertCell();
    var del = row.insertCell();
  
    a.innerHTML = document.getElementById("desenvolvedor").value;
    b.innerHTML = document.getElementById("projeto").value;
    c.innerHTML = document.getElementById("valor").value;
    d.innerHTML = document.getElementById("stack").value;
    e.innerHTML = document.getElementById("dias").value;
    edit.innerHTML = '<button onclick="editar()" id="botao-edit">EDITAR</button>'
    del.innerHTML = '<button onclick="deletar(this)" id="botao-del">DELETAR</button>';
    
    document.getElementById("desenvolvedor").value = '';
    document.getElementById("projeto").value = '';
    document.getElementById("valor").value = '';
    document.getElementById("stack").value = '';
    document.getElementById("dias").value = '';

    event.preventDefault();
}

function deletar(td){
    selectedRow = td.parentElement.parentElement;
    var table = document.getElementById("tabela");   
    table.deleteRow(selectedRow.rowIndex);
}

function editar(){
    
    
    a = document.getElementById("desenvolvedor").value;
    b = document.getElementById("projeto").value;
    c = document.getElementById("valor").value;
    d = document.getElementById("stack").value;
    e = document.getElementById("dias").value;

}
