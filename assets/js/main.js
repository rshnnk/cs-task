

//toggle button

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'none' || e.style.display=='') e.style.display = 'block';
    else e.style.display = 'none';
}

//var toggleButton = document.getElementsByClassName('burger-button'),
//    sidebar = document.getElementsByClassName('sidebar');
//if(toggleButton.style.display = 'none'){
//    sidebar.style.display = 'block'
//}
//



//accordion


var toggleElements = document.getElementsByClassName('toggle');
for(var i = 0; i < toggleElements.length; i++){
    toggleElements[i].addEventListener('click', animateAccordion, false);
}

function animateAccordion(e){
    var innerContent = e.srcElement.nextElementSibling;
    if(innerContent.style.height == ''){
        innerContent.className = 'inner testing';
        var elementHeight =  innerContent.clientHeight;
        innerContent.className = 'inner';
        setTimeout(function(){innerContent.style.height = elementHeight+'px';}, 1);
        setTimeout(function(){innerContent.style.height = 'auto';}, 501);
    }else{
        innerContent.style.height = innerContent.clientHeight+'px';
        setTimeout(function(){innerContent.style.height = '';}, 1);
    }
}


//realizing of search

var apex_search = [];


apex_search.init = function(){
    this.rows = document.getElementById("data").getElementsByTagName("li");
    this.rows_length = apex_search.rows.length;
    this.rows_text = [];

    for (var i = 0; i < apex_search.rows_length; i++){

        this.rows_text[i] = (apex_search.rows[i].innerText)?apex_search.rows[i].innerText.toUpperCase():apex_search.rows[i].textContent.toUpperCase();

    }
    this.time = false;
}

apex_search.lsearch = function(){
    this.term = document.getElementById("s").value.toUpperCase();
    for(var i = 0, row; row = this.rows[i], row_text = this.rows_text[i]; i++){
        row.style.display = ((row_text.indexOf(this.term) != -1) || this.term === "")?"":"none";
    }
    this.time = false;
}

apex_search.search = function(e){
    var keycode;

    if(window.event){
        keycode = window.event.keyCode;
    } else if(e){
        keycode = e.which;
    } else{
        return false;
    }

    if(keycode == 13){
        apex_search.lsearch();
    } else{
        return false;
    }
}