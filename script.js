const toggleActive = () => {
   document.querySelector('.menu').classList.toggle('active');
};

document.querySelector('.mobile-nav').addEventListener('click', toggleActive);

document.querySelector('.mobile-close').addEventListener('click', toggleActive);
