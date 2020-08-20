
/*轮播图*/
window.onload = function () {
    function c() {
        a.bullets.eq(0).addClass("firsrCurrent")
    }
    var b, a = new Swiper(".banner .swiper-container", {
        autoplay: 3e3,
        speed: 1e3,
        loop: !0,
        runCallbacksOnInit: !1,
        watchSlidesProgress: !0,
        pagination: ".banner .swiper-pagination",
        paginationClickable: !0,
        paginationBulletRender: function (a, b, c) {
            return '<li class="' + c + '"><span><i></i></span></li>'
        },
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        onProgress: function (a) {
            var b, c, d, e, f, g;
            for (b = 0; b < a.slides.length; b++) {
                for (c = a.slides.eq(b), d = c[0].progress, d > 0 ? (e = .9 * d * a.width, scale = 1 -
                        .1 * d, d > 1 && (scale = .9), txtPositionX = 0, txtPositionY = 30 * d + "px") :
                    (e = 0, scale = 1, txtPositionX = 1e3 * -d + "px", txtPositionY = 0), f = c.find(
                        ".txt"), g = 0; g < f.length; g++) f.eq(g).transform("translate3d(" +
                    txtPositionX + "," + txtPositionY + ",0)");
                c.transform("translate3d(" + e + "px,0,0) scale(" + scale + ")")
            }
        },
        onSetTransition: function (a, b) {
            var c, d, e;
            for (c = 0; c < a.slides.length; c++)
                for (slide = a.slides.eq(c), slide.transition(b), d = slide.find(".txt"), e = 0; e < d.length; e++)
                    d.eq(e).transition(b)
        },
        onSlideChangeStart: function (a) {
            a.autoplaying && (a.bullets.eq(a.realIndex - 1).addClass("replace"), a.bullets.eq(a.realIndex -
                1).removeClass("current firsrCurrent"), a.bullets.eq(a.realIndex).addClass(
                "current"), 0 == a.realIndex && a.bullets.removeClass("replace"))
        },
        onAutoplayStop: function (a) {
            a.$(".autoplay").removeClass("autoplay")
        }
    });
    for (b = 0; b < a.slides.length; b++) a.slides[b].style.zIndex = b;
    setTimeout(c, 1)


// 效果图
    var viewSwiper = new Swiper('.view .swiper-container', {
        onSlideChangeStart: function() {
                updateNavPosition()
        }
    })
    
    $('.view .arrow-left,.preview .arrow-left').on('click', function(e) {
        e.preventDefault()
        if (viewSwiper.activeIndex == 0) {
            viewSwiper.slideTo(viewSwiper.slides.length - 1, 2000);
            return
        }
        viewSwiper.slidePrev()
    })
    $('.view .arrow-right,.preview .arrow-right').on('click', function(e) {
        e.preventDefault()
        if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
            viewSwiper.slideTo(0, 2000);
            return
        }
        viewSwiper.slideNext()
    })
    
    var previewSwiper = new Swiper('.preview .swiper-container', {
        //visibilityFullFit: true,
        slidesPerView: 'auto',
        allowTouchMove: false,
        onTap: function() {
                viewSwiper.slideTo(previewSwiper.clickedIndex)
        }
    })
    
    function updateNavPosition() {
            $('.preview .active-nav').removeClass('active-nav')
            var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav')
            if (!activeNav.hasClass('swiper-slide-visible')) {
                if (activeNav.index() > previewSwiper.activeIndex) {
                    var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1
                    previewSwiper.slideTo(activeNav.index() - thumbsPerNav)
                } else {
                    previewSwiper.slideTo(activeNav.index())
                }
            }
        }

        
    var tag = true;
    var imgs = document.getElementById("house").getElementsByTagName("img");
    var changePage = document.getElementById("house").getElementsByClassName("page")[0];
      changePage.onclick = function ImageSrc() { 
            if(tag) {
                for (var i = 0, l = imgs.length; i < l - 1; i++) {
                    imgs[i].src = `imgs/house/${parseInt(i+13)}.jpg`; 
                }
                imgs[i].src = `imgs/house/${parseInt(i+13)}.png`;
                tag = false;
                changePage.style = ' transform: rotateX(180deg);';
                changePage.title = '查看上一个户型';
            }else{
                for (var i = 0, l = imgs.length; i < l - 1; i++) {
                    imgs[i].src = `imgs/house/${parseInt(i)}.jpg`; 
                }
                imgs[i].src = `imgs/house/${parseInt(i)}.png`;
                tag = true;
                changePage.style = ' transform: rotateX(0deg);';
                changePage.title = '查看下一个户型';

                
            }
        }  

    };
