var itens = [];
$(document).ready(function(){
    console.log('Ok');
    $("#search-bar").submit(function(e){
        e.preventDefault();
    });
});

  function search(){
    var input, filter, itensList, itens, a, i;
    input = document.getElementById("search-bar");
    filter = input.value.toUpperCase();
    itensList = document.getElementById('itens-area');
    itens = itensList.getElementsByClassName('itens-list');
    for (i = 0; i < itens.length; i++) {
        a = itens[i].getElementsByTagName("a")[0];
        console.log(a)
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            itens[i].style.display = "";
        } else {
            itens[i].style.display = "none";
        }
    }
  }