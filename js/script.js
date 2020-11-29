jQuery(document).ready(function($) {
    'use strict';

    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('.bottom-header').addClass("sticky-nav");
        } else {
            $('.bottom-header').removeClass("sticky-nav");
        }
    });

    $(".nav-item .get-quote").hover(
        function() {
            $(this).removeClass("get-quote");
        },
        function() {
            $(this).addClass("get-quote");
        }

    );

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

    $('#scroll-to-top').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $('#single-item-banner').slick({
        slidesToShow: 1,
        autoplay: true,
        arrows: false,
        infinite: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true
    });

    var myLazyLoad = new LazyLoad({
        elements_selector: ".lazy"
    });

    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
    });

    $('#single-item-portfolio').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        adaptiveHeight: true,
        asNavFor: '#multiple-item-portfolio'
    });
    $('#multiple-item-portfolio').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '#single-item-portfolio',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    $(function() {
        $.stellar({
            horizontalScrolling: false,
            verticalOffset: 0,
            responsive: true
        });
    });

    $('#single-item-say').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('#service-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        adaptiveHeight: true
    });

    $('#comment-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true
    });

    $(".answer-btn").click(function(e) {
        e.preventDefault();
        $(this).parent().next().slideToggle("fast");
    });


});