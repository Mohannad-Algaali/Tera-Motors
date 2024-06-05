import {productsList} from "../script/ProductsManagement.js"

let searchBar = Document.getElementById("search-input");
let resetBtn = Document.getElementById("reset-search-button");

searchBar.addEventListener("keydown",checkInput);


function checkInput(){

}

// resetBtn.addEventListener("click",reset);

// const EMPTY = 'empty';
// const NOT_EMPTY = 'not-empty';

// function activateButton() {
//     if (checkEmpty()){
//         if(searchBar.classList.contains(NOT_EMPTY)){
            
//             searchBar.classList.remove(NOT_EMPTY);
//         }
//         searchBar.classList.add(EMPTY);
        
//     }else{
//         if(searchBar.classList.contains(EMPTY)){
//         searchBar.classList.remove(EMPTY);
//     }
//         searchBar.classList.add(NOT_EMPTY);
        
//     }
// }

// function reset() {
//     searchBar.input = '';
// }

// function checkEmpty(){
//     let input = String(searchBar.input);
//     if (input.length === 0){
//         return true;
//     }else{
//         return false;
//     }
// }


