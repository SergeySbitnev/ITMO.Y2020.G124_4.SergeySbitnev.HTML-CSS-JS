function doFirst(){
    var button = document.getElementById('button');
    button.addEventListener("click", save, false);
    display();

}

function save(){
    var name = document.getElementById('name').value;
    var mail = document.getElementById('mail').value;
    var phone = document.getElementById('phone');
    var comments = document.getElementById('comments');
    sessionStorage.setItem(name, mail);
    display();  
    name.value="";
    mail.value="";
    phone.value="";
    comments.value="";
    
}

function display(){
    var display_data = document.getElementById('display_data');
    display_data.innerHTML="";
    for(var i=0;  i < sessionStorage.length; i++){
        var a = sessionStorage.name(i);
        var b = sessionStorage.getItem(a);
        display_data.innerHTML += a + " - " + b + "<br>";
    }
}

window.addEventListener("load", doFirst, false);