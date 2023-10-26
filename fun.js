
// update variables
// referimos al root que es donde se declararon las variables e un inicio
var raiz = document.querySelector(':root'); //obtengo el elemento raiz, que es el HTML
// console.log(raiz);
var raizEstilos = getComputedStyle(raiz); //obtengo las propiedades y valores de la raiz
var amarillo = raizEstilos.getPropertyValue('--amarillo'); // le pasamos el nombre de la variable que elejimos (--amarillo) 
// console.log('amarillo piolin: ', amarillo);

raiz.style.setProperty('--amarillo', '#666666');