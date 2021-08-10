window.addEventListener('load', function (){
'use strict';
let footer, year, owner;
year = new Date().getFullYear();
owner = 'Emmanuel Emejulu';
footer = document.querySelector('footer');
footer.innerHTML = `&copy; ${year} EmejuluCodes <br/>by<br/> ${owner}<br/><hr style='width:43vw;'><a href='https://www.github.com/JUEsoft/'><i class='fab fa-github'></i></a>&nbsp;&nbsp;&nbsp;<a href='https://www.facebook.com/Emejulu.Officials/'><i class='fab fa-facebook'></i></a>&nbsp;&nbsp;&nbsp;<a href='https://www.twitter.com/EmejuluCodes/'><i class='fab fa-twitter'></i></a>&nbsp;&nbsp;&nbsp;<a href='#'><i class='fab fa-linkedin'></i></a>&nbsp;&nbsp;&nbsp;<a href='https://www.instagram.com/emmanuel_emejulu/'><i class='fab fa-instagram'></i></a>&nbsp;&nbsp;&nbsp;<a href='mailto:emmanueljunior433@gmail.com'><i class='far fa-envelope'></i></a>&nbsp;&nbsp;&nbsp;<a href='https://api.whatsapp.com/send?phone=+2349039923365'><i class='fab fa-whatsapp'></i></a>`;      
});