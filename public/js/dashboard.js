function deleteItem(id){ 
    document.getElementById("itens-table").deleteRow('' + id); 
    alert('Iten '+ id + ' deleted!');
}