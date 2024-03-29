document.onkeydown = function (event) {
    if (event.keyCode == 13) {
        event.preventDefault()
    }
}

function adicionar() {

    if (document.getElementById("desenvolvedor").value == "") {
        document.getElementById("valid0").innerHTML = "Preencha o campo abaixo!"

        event.preventDefault()
        return
    } else {
        document.getElementById("valid0").innerHTML = ""

    }

    if (document.getElementById("projeto").value == "") {
        document.getElementById("valid1").innerHTML = "Preencha o campo abaixo!"

        event.preventDefault()
        return
    } else {
        document.getElementById("valid1").innerHTML = ""

    }

    if (document.getElementById("valor").value == "") {
        document.getElementById("valid2").innerHTML = "Preencha o campo abaixo!"

        event.preventDefault()
        return
    } else {
        document.getElementById("valid2").innerHTML = ""
    }

    if (document.getElementById("stack").value == "") {
        document.getElementById("valid3").innerHTML = "Preencha o campo abaixo!"

        event.preventDefault()
        return
    } else {
        document.getElementById("valid3").innerHTML = ""
    }

    if (document.getElementById("dias").value == "") {
        document.getElementById("valid4").innerHTML = "Preencha o campo abaixo!"

        event.preventDefault()
        return
    } else {
        document.getElementById("valid4").innerHTML = ""
    }

    document.getElementById("valid1").innerHTML = ""
    document.getElementById("valid2").innerHTML = ""
    document.getElementById("valid3").innerHTML = ""
    document.getElementById("valid4").innerHTML = ""

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

function deletar(td) {
    if (confirm("Você tem certeza que quer deletar?")) {

        selectedRow = td.parentElement.parentElement //sobe uma <div> a cada parent element 
        var table = document.getElementById("tabela");
        table.deleteRow(selectedRow.rowIndex);

        var td2 = document.getElementById("result-projetos");
        var result_projetos = document.getElementById("result-meta-projetos");

        td2.innerHTML = table.rows.length - 2;

        var metaProjetos = ((table.rows.length - 2) / 18) * 100;
        result_projetos.innerHTML =  parseFloat(metaProjetos.toFixed(1)) + "%"

        var result = document.getElementById("result-valores");
        var result_meta = document.getElementById("result-meta-valor");

        result.innerHTML -= parseFloat(selectedRow.cells[2].innerHTML);

        var meta = parseFloat(result.innerHTML / 27000) * 100
        result_meta.innerHTML = parseFloat(meta.toFixed(1)) + "%"

    }
}

function editar(td) {


    selectedRow = td.parentElement.parentElement;

    document.getElementById("desenvolvedor").value = selectedRow.cells[0].innerHTML;
    document.getElementById("projeto").value = selectedRow.cells[1].innerHTML;
    document.getElementById("valor").value = selectedRow.cells[2].innerHTML;
    document.getElementById("stack").value = selectedRow.cells[3].innerHTML;
    document.getElementById("dias").value = selectedRow.cells[4].innerHTML;

    document.getElementById("edit-confirm").style.display = 'inline-block'
    document.getElementById("botao-add").style.display = 'none'

    event.preventDefault();

}

function editconfirm() {

    selectedRow.cells[0].innerHTML = document.getElementById("desenvolvedor").value;
    selectedRow.cells[1].innerHTML = document.getElementById("projeto").value;
    selectedRow.cells[2].innerHTML = document.getElementById("valor").value;
    selectedRow.cells[3].innerHTML = document.getElementById("stack").value;
    selectedRow.cells[4].innerHTML = document.getElementById("dias").value;

    document.getElementById("edit-confirm").style.display = 'none'
    document.getElementById("botao-add").style.display = 'inline-block'

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
    var td3 = document.getElementById("result-meta-valor");
    var td4 = document.getElementById("result-meta-projetos");

    for (i = 2; i < table.rows.length; i++) {
        result += parseFloat(table.rows[i].cells[2].innerHTML)

    }

    td.innerHTML = result

    td2.innerHTML = table.rows.length - 2;

    var metaValor = (result / 27000) * 100
    td3.innerHTML = parseFloat(metaValor.toFixed(1)) + "%"

    var metaProjetos = ((table.rows.length - 2) / 18) * 100;
    td4.innerHTML = parseFloat(metaProjetos.toFixed(1)) + "%"
    
}