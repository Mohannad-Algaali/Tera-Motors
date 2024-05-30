

const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click',showMenu);
let navContainer = document.getElementById('navbar-container');
let navItem = document.getElementById('navbar-item');




function showMenu(){
    let isOpaque = navContainer.classList.contains('show');
    if(isOpaque){
        navContainer.classList.remove('show');
        // navItem.classList.remove('show');
    }
    else{
        navContainer.classList.add('show');
        // navItem.classList.add('show');
    }
    

}




