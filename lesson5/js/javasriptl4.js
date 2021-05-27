let year = new Date ();
document.getElementById("Ayear").innerHTML = year.getFullYear();

var jdate = document.lastModified;
document.getElementById("last-update").innerHTML = jdate;

/* -----------navigation responsive------------*/
const hambutton = document.querySelector('.pmenu');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};


//what date in javascript is
let thedate = new Date();
//lets try 
if (thedate.getDay() == 5){
document.querySelector("#tbanner").style.display = 'block';
}



