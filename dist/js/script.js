const categories = document.querySelector('.portfolio__categories'),
    categoriesList = document.querySelector('.portfolio__filter'),
    categoriesItem = document.querySelectorAll('.portfolio__filter-item');

categoriesItem.forEach(function (item) {
    item.addEventListener('click', function (evt) {
        evt.preventDefault();
        categoriesItem.forEach(function (categori) {
            categori.classList.remove('active');
        });
        categories.classList.remove('active');
        categoriesList.classList.remove('active');
        item.classList.add('active');
    });
});

categories.addEventListener('click', function () {
    this.classList.toggle('active');
    categoriesList.classList.toggle('active');
});

// menu

const headerMenu = document.querySelector('.header-main__navigation-list'),
    burgerBtn = document.querySelector('.burger-menu'),
    body = document.body,
    headerLink = headerMenu .querySelectorAll('.header-main__navigation-link');

burgerBtn.addEventListener('click', function(){
    this.classList.toggle('active');
    headerMenu.classList.toggle('active');
    body.classList.toggle('lock');
});

headerLink.forEach(function(item){
    item.addEventListener('click' , function(){
        burgerBtn.classList.remove('active');
        headerMenu.classList.remove('active');
        body.classList.remove('lock');
    });
});