var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function() {
    var sidebar = document.querySelector(".container").classList.toggle("show-menu");
});

$('.ljs-parceiras').slick({
    autoplay: true,
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1

});