var tabletWidth = 1200;
var mobileWidth = 560;

var windowWidth = $(window).width();
$(window).resize(function() {
    windowWidth = $(window).width();


    if (windowWidth >= tabletWidth) {
        createAnimation();
    } else {
        destroyAnimation()
    }
})

var menuItems = $('.menu-item');

function createAnimation() {
    menuItems.each(function(index, menuItem) {
        let _menuItem = $(menuItem);
        let id = _menuItem.children('a').attr('href');

        $(id).addClass('show');

        if (_menuItem.hasClass("active")) {
            $(id).addClass('animate__fadeInLeft');
        } else {
            $(id).addClass('animate__fadeOutLeft hidden');
        }
    })
}

function destroyAnimation() {
    menuItems.each(function(index, menuItem) {
        let _menuItem = $(menuItem);
        let id = _menuItem.children('a').attr('href');

        if ($(id).hasClass("animate__fadeInLeft")) {
            $(id).removeClass('animate__fadeInLeft');
        }
        if ($(id).hasClass("animate__fadeOutLeft hidden")) {
            $(id).removeClass('animate__fadeOutLeft hidden');
        }
    })
}





menuItems.click(function(Event) {
    Event.preventDefault();

    let current = $(this);
    let id = current.children('a').attr('href');
    let menuItem = $(id);

    menuItems.removeClass("active");
    current.addClass("active");

    if (windowWidth >= tabletWidth) {
        console.log(windowWidth + ', ' + tabletWidth);
        $('.main').find('.section-tab').removeClass('animate__fadeInLeft');
        $('.main').find('.section-tab').addClass('animate__fadeOutLeft hidden');

        if (current.hasClass("active")) {
            menuItem.removeClass('animate__fadeOutLeft hidden');
            menuItem.addClass('animate__fadeInLeft');
        }
    } else {
        $('html, body').animate({
            scrollTop: menuItem.offset().top - 55
        }, 100);
    }
});



// check form data

$("btn-submit").click(function() {
    $('form.form-messag form-input .form-control').each(function() {
        let i = 0;
        console.log(i);
    })
    return false;
})

$(document).ready(function() {
    // carousel
    $('.owl-carousel').owlCarousel({
        margin: 50,
        items: 1,
        dots: true,
    });
    // create dots
    $('.dots-percentage').append('<div class="da"><span class="dot"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></div>').after('<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>')
    $(window).on('resize', function() {
        $('.dot').width($('.dots-percentage').width());
        var windowWidth = $(window).width();
    })
    $('.dot').width($('.dots-percentage').width());

    if (windowWidth >= tabletWidth) {
        createAnimation();
    } else {
        destroyAnimation();
        $(document).on("scroll", function() {
            let windowHeight = $(window).height() / 4;
            let scrollPos = parseInt($(document).scrollTop());
            $('.menu-item').each(function(index) {
                let _this = $(this);
                let current = $(this).children('a');
                let refElement = $(current.attr("href"));

                if (refElement.position().top <= scrollPos + windowHeight && (refElement.position().top + refElement.height()) > scrollPos + windowHeight) {
                    $('.menu-item').removeClass("active");
                    _this.addClass("active");
                } else {
                    _this.removeClass("active");
                }

                if (scrollPos <= $('.section-tab').first().position().top) {
                    $('.menu-item').first().addClass("active");
                }
            });
        })
    }
});