var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function() {
    var sidebar = document.querySelector(".container").classList.toggle("show-menu");
});

$('.projetos').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
});