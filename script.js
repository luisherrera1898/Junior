
document.getElementById('ToggleShow').addEventListener('click', () => {
    holaMundo(a);
    holaMundo(b);
});

function holaMundo(a){
    console.log(a);
    const content = document.getElementById('variablesContent');
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden'); // Muestra el contenido
    } else {
        content.classList.add('hidden'); // Oculta el contenido
    }
}

let a = document.getElementById('variablesContent');

let b = document.getElementById('concatenacionContent');


for(let i=0; i<10; i++){
    console.log(i+1);
}
