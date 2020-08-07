$(function(){
    $('.slider__body').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,    
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        responsive: [{
            breakpoint: 767,
            settings: {   
                // dots: false
            }
        }]
    });

    // -------------------------------------------------------------------------- SCROLL SMOOTH
    $('a[href^="#"]').on('click', function() {
        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 700);

        return false;
    });

    // ------------------------------------------------------------------------ IMAGE
    function ibg() {
        let ibg = document.querySelectorAll('.ibg');

        for (let f = 0; f < ibg.length; f++) {
            let selector = ibg[f].querySelector('img');

            if (selector) {
                ibg[f].style.backgroundImage = 'url(' + selector.getAttribute('src') + ')';
            }
        }
    }

    ibg();


    // ------------------------------------------------------------------------ WEBP - CSS (BACKGROUND)
    function webp(callback) {
        let webp = new Image();

        webp.onload = webp.onerror = function() {
            callback(webp.height == 2);
        };
        
        webp.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    webp(function (support){
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    }); 


    let 
        menuOpen = $('.header__open-menu'),
        menuWrapper = $('.menu__wrapper'),
        menuOverflow = $('.menu__overflow'),
        menuClose = $('.menu__close'),
        menuLink = $('.menu__link'),
        page = $('.page'),
        body = $('body');

    menuOpen.on('click', function() {
        menuWrapper.addClass('active');
        menuOverflow.addClass('active');
        page.addClass('active');
        body.css({
            'overflow': 'hidden'
        });
    });
    menuClose.on('click', function() {
        menuWrapper.removeClass('active');
        menuOverflow.removeClass('active');
        page.removeClass('active');
        body.css({
            'overflow': ''
        });
    });
    menuOverflow.on('click', function() {
        menuWrapper.removeClass('active');
        menuOverflow.removeClass('active');
        page.removeClass('active');
        body.css({
            'overflow': ''
        });
    });

    menuLink.each(function() {
        $(this).on('click', function(e) {
            e.preventDefault();

            menuWrapper.removeClass('active');
            menuOverflow.removeClass('active');
            page.removeClass('active');
            body.css({
                'overflow': ''
            });            
        })
    })
    
    function addActivePrice() {
        let 
            priceNew = $('.prices__new'),
            price = $('.prices__price');


        priceNew.each(function() {
            if ($(this).hasClass('active')){
                $(this).prev(price).addClass('active-price');
            }
        })
    };
    addActivePrice();

});