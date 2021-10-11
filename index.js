
/*Отчество в зависимости от страны */

const chooseCountry = document.querySelector('.fields___country');

chooseCountry.addEventListener ('change', func);

function func(){
   const chooseCountry = document.querySelector('.fields___country');
   const lastname = document.querySelector('.lastname');
   const selectedCountry = chooseCountry.children[2].value;
   if(chooseCountry.value == selectedCountry){
   lastname.style.display = 'none';
   } else {
   lastname.style.display = 'inline';
   }
}

/*Добавление ребенка*/
const buttonPlus = document.querySelector('.fields__plus1');


buttonPlus.addEventListener ('click', func2);

function func2() {
const newDiv = document.createElement('div');
newDiv.classList.add ('divchildone');
newDiv.style.display = 'block';


let inputAddChild = document.querySelector('.childone');
inputAddChild.after(newDiv);
const newInput = newDiv.insertAdjacentHTML('afterbegin', '<input>');

const siblingInput = newDiv.firstElementChild;
siblingInput.classList.add ('child');

}

/*Исчезание и появление ответа*/
var personInfo = document.querySelector('#persinfo');


var btnSubmit = document.getElementById('submitbtn');
btnSubmit.addEventListener ('click', funcdisapp);

function funcdisapp() {
   var forma = document.querySelector('.content');
   forma.style.display = 'none';

   var personInfo = document.querySelector('#persinfo');
   personInfo.style.display = 'block';  
}



/*Создание массива при клике на кнопку + добавление его значения */

var btnSubmit = document.getElementById('submitbtn');
btnSubmit.addEventListener ('click', getInputs);

function getInputs(){
let country = document.querySelector('.fields___country');
let countrySel = country.value; 
let name = document.querySelector('.username').value;
let userLastName1 = document.querySelector('.userlastname1').value;
let userLastName = document.querySelector('.userlastname').value;



arr = [];
let usChild = document.querySelectorAll('.child');


for (let i = 0; i < usChild.length; i++ ){
   console.log(usChild[i]);
}


   
   




let persIn = document.getElementById('persinfo');
persIn.innerHTML = `<p> Спасибо ${name} ${userLastName} ${userLastName1} из ${countrySel}.</p><p>У вас детей:  .</p>`;

}


/*
/*tasks

let out1 = document.querySelector('.out1');
   for(let num = 1; num<17; num++) {
      out1.innerHTML += `${num}_`;
   }

*/











