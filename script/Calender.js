//const calender = document.querySelector('.calender');
const weeks = document.querySelector('.weeks');
const days = document.querySelector('.days');

createCalender();

function createCalender(){
    let weekdays = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
    for(let i =0;i<weekdays.length;i++){
        let temp = document.createElement('li');
        temp.textContent = weekdays[i];
        weeks.appendChild(temp);
    }
    for(let i=0;i<35;i++){
        let temp = document.createElement('li');
        temp.textContent = i+1;
        days.appendChild(temp);
    }
}