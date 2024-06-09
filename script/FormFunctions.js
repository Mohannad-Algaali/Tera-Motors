let forms = document.querySelectorAll('.form');
let currentPage = 0;
let nextBtnList = document.querySelectorAll('.next-btn');
let backBtnList = document.querySelectorAll('.back-btn');
let checkpoints = document.querySelectorAll('.checkpoint');

const DONE_CLASS = 'done';
const PENDING_CLASS = 'pending';

const SHOWN_CLASS = 'shown';


for(let b of nextBtnList){
    b.addEventListener('click',()=>{if(currentPage<forms.length-1){currentPage= currentPage+1; organizePages();}});
}
for(let b of backBtnList){
    b.addEventListener('click',()=>{if(currentPage>0){currentPage= currentPage-1; organizePages();}});
}
function organizePages(){
    for(let i=0;i<forms.length;i++){
        if(i<currentPage){
            forms[i].classList.add(DONE_CLASS);
            forms[i].classList.remove(PENDING_CLASS);
            
        }else if(i===currentPage){
            forms[i].classList.remove(DONE_CLASS);
            forms[i].classList.remove(PENDING_CLASS);
        }else{
            forms[i].classList.add(PENDING_CLASS);
            forms[i].classList.remove(DONE_CLASS);
           
        }
    }
}

function checkEmpty(){
    
}

organizePages();


