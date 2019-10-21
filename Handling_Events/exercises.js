var para = document.querySelector('p');
var button = document.querySelector('button');
para.addEventListener('mousedown', function(){
    console.log("Handler for paragraph")
});
button.addEventListener('mousedown', function(){
    console.log("Handler for button");
    if (event == 3) event.stopPropagation();
});

function swap(btn){
    if (!btn.disabled){
        btn.disabled = true;
    }
}
var btnLive = document.querySelector('#live');
btnLive.addEventListener('click', swap);
