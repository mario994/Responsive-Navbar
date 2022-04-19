const btnMenu = document.querySelector('.hamburguer-menu');
const menuBar = document.querySelector('.menu');

//Add an id to the html element
btnMenu.addEventListener('click', () => {

    if(!menuBar.getAttribute('id')){
        //if the id doesn´t exist, add it
        menuBar.setAttribute('id', 'show-menu');
    } else {
        //otherwise if the id exist, delete it
        menuBar.setAttribute('id', '');
    }

});