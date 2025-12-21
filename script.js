var burgerButton = document.getElementById('burgerMenu');
var menu = document.getElementById('mobileMenu');

burgerButton.onclick = function() {
    burgerButton.classList.toggle('active');
    menu.classList.toggle('active');
};

var menuLinks = document.querySelectorAll('.mobile-nav-link');

for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].onclick = function() {
        burgerButton.classList.remove('active');
        menu.classList.remove('active');
    };
}


