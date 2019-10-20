var para = document.querySelector('p');
var button = document.querySelector('button');
para.addEventListener('mousedown', function(){
    console.log("Handler for paragraph")
});
button.addEventListener('mousedown', function(){
    console.log("Handler for button");
    if (event == 3) event.stopPropagation();
});
