var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function() {
    var sidebar = document.querySelector(".container").classList.toggle("show-menu");
});

$('.projetos').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true
});