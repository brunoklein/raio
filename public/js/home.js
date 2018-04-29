var itens = [];
$(document).ready(function(){
    console.log('Ok');
    $("#search-bar").submit(function(e){
        e.preventDefault();
    });
});

  function search(){
    var input, filter, ul, li, a, i;
    input = document.getElementById("search-bar");
    filter = input.value.toUpperCase();
    ul = document.getElementById('itens-list');
    li = ul.getElementsByTagName('li');
    console.log(li.length);
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        console.log(a)
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
  }