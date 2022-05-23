// Scroll Navbar

window.addEventListener('scroll' , function () {
    let navbar = document.getElementById('navbar');
    navbar.classList.toggle('scroll-nav' , window.scrollY > 0);
})

// Active page in navbar

const activePage = window.location.pathname;
const navLinks = document.getElementsByClassName('nav-link');
for (let link = 0; link < navLinks.length; link++) {
    if(navLinks[link].href.includes(`${activePage}`)){
        navLinks[link].classList.add('active');
    };
}

// Scroll down in main page

$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.main-products').offset().top }, 'slow');
      return false;
    });
  });


// Navbar Burger
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar-nav');
    const navLinks = document.querySelectorAll('.navbar-nav li');
    burger.addEventListener('click', ()=>{ 
        //Toggle nav
        nav.classList.toggle('nav-active');

        //List animation
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        })
        //Burger animation
        burger.classList.toggle('toggle')
     })
}
navSlide();


//Product Filter Dropdown
var filterTitles = document.querySelectorAll('.filter-title');
$.each(filterTitles, function (indexInArray, valueOfElement) {
     $(valueOfElement).click(function () { 
        if (valueOfElement.style.getPropertyValue('--rotateX') != 'rotateX(180deg)') {
            valueOfElement.style.setProperty('--rotateX' , 'rotateX(180deg)')
        } else{
            valueOfElement.style.setProperty('--rotateX' , '')
        }
         var filters = this.nextElementSibling;
         $(filters).toggleClass('active-filter')
      })
});