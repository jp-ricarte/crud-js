function adicionar(){
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
    edit.innerHTML = '<button onclick="editar(this)" id="botao-edit"><i class="fa fa-edit"></i>EDITAR</button>';
    del.innerHTML = '<button onclick="deletar(this)" id="botao-del"><i class="fa fa-trash"></i>DELETAR</button>';
    
    document.getElementById("desenvolvedor").value = '';
    document.getElementById("projeto").value = '';
    document.getElementById("valor").value = '';
    document.getElementById("stack").value = '';
    document.getElementById("dias").value = '';

    soma();

    event.preventDefault();
}

function deletar(td){
    if(confirm("Você tem certeza que quer deletar?")){
        selectedRow = td.parentElement.parentElement; //sobe uma <div> a cada parent element 
        var table = document.getElementById("tabela");   
        table.deleteRow(selectedRow.rowIndex);
        var td2 = document.getElementById("result-projetos");
        td2.innerHTML =  table.rows.length-2;
    }
}
 
function editar(td){
    
    selectedRow = td.parentElement.parentElement;

    document.getElementById("desenvolvedor").value = selectedRow.cells[0].innerHTML;
    document.getElementById("projeto").value = selectedRow.cells[1].innerHTML;
    document.getElementById("valor").value = selectedRow.cells[2].innerHTML;
    document.getElementById("stack").value = selectedRow.cells[3].innerHTML;
    document.getElementById("dias").value = selectedRow.cells[4].innerHTML;
    
    document.getElementById("edit-confirm").style.visibility = 'visible'
    document.getElementById("botao-add").style.visibility = 'hidden'

}
function editconfirm(){  
   
    selectedRow.cells[0].innerHTML = document.getElementById("desenvolvedor").value;
    selectedRow.cells[1].innerHTML = document.getElementById("projeto").value;    
    selectedRow.cells[2].innerHTML = document.getElementById("valor").value;
    selectedRow.cells[3].innerHTML = document.getElementById("stack").value;
    selectedRow.cells[4].innerHTML = document.getElementById("dias").value;
    
    document.getElementById("edit-confirm").style.visibility = 'hidden'
    document.getElementById("botao-add").style.visibility = 'visible'

    document.getElementById("desenvolvedor").value = '';
    document.getElementById("projeto").value = '';
    document.getElementById("valor").value = '';
    document.getElementById("stack").value = '';
    document.getElementById("dias").value = '';

    soma();

    event.preventDefault();
}

function soma() {

    var result = 0;
    
    var table = document.getElementById("tabela");
    
    var td = document.getElementById("result-valores");
    var td2 = document.getElementById("result-projetos");

   for (i = 2; i < table.rows.length; i++) {
        result += parseInt(table.rows[i].cells[2].innerHTML);
      
    }
    
    td.innerHTML = "R$ " + result ; 
    td2.innerHTML =  table.rows.length-2;
}

