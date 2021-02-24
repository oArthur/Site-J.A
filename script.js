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

document.getElementById('btn-card1').addEventListener('click', function() {
    window.open('http://objetivaatacadista.com.br/', '_blank');
});
document.getElementById('btn-card2').addEventListener('click', function() {
    window.open('https://campeaodaconstrucao.com.br/', '_blank');
});
document.getElementById('btn-card3').addEventListener('click', function() {
    window.open('https://www.soreparos.com.br/', '_blank');
});
document.getElementById('btn-card4').addEventListener('click', function() {
    window.open('http://chamaalternativa.com.br/', '_blank');
});
document.getElementById('btn-card5').addEventListener('click', function() {
    window.open('http://accoelho.com.br/ac/', '_blank');
});
document.getElementById('btn-card6').addEventListener('click', function() {
    window.open('https://www.condorbrasil.com.br/', '_blank');
});