var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,  // Mostrar apenas um slide por vez
    spaceBetween: 10,  // Espaço entre os slides
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        init: function () {
            // Ocultar o botão de anterior no início
            document.querySelector('.swiper-button-prev').style.display = 'none';
        },
        slideChangeTransitionEnd: function () {
            // Verificar se é o último slide e mostrar o botão de anterior
            if (swiper.isEnd) {
                document.querySelector('.swiper-button-prev').style.display = 'block';
            } else {
                document.querySelector('.swiper-button-prev').style.display = 'none';
            }
        }
    }
});