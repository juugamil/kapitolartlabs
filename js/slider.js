(function ($) {
        var image = $(".slider-slice img"),
            imageContainer = $(".slider-slice-imageContainer"),
            sliderSlice = $(".slider-slice"),
            imageActive = $(".image--active"),
            sliderOverlay = $(".slider-overlay"),
            CTA = $(".navigation"),
            vw,
            vh,
            delay = 0.06,
            delays = [];

        TweenMax.set(imageContainer, {
            xPercent: "100"
        });
        TweenMax.set(imageActive, {
            xPercent: "0"
        });

        $("body").addClass("u-block<a href="
            https: //www.jqueryscript.net/tags.php?/Scroll/">Scroll</a>");

            for (var i = 0; i < 4; i++) {
                delays.push(i * delay);
            };

            /********************************
              FIT THE WINDOWS WITH THE IMAGES
            ********************************/
            function positionImages() {
                vw = $(window).width();
                vh = $(window).height();
                var imageW = image.width();
                var imageH = image.height();
                ratioImg = imageW / imageH;
                ratioW = vw / vh;
                if (ratioImg > ratioW) {
                    image.css({
                        "width": "auto",
                        "height": vh
                    });
                } else {
                    image.css({
                        "width": vw,
                        "height": "auto"
                    });
                }
            }
            positionImages(); $(window).on("resize", positionImages);


            /********************************
              OPENING
            ********************************/
            var tlOpening = new < a href = "https://www.jqueryscript.net/tags.php?/Timeline/" > Timeline < /a>Max({delay: 2});
            var delayOpening = 0.05; tlOpening
            .fromTo(($(".slider-slice-imageContainer.image--active").eq(0)), 1, {
                xPercent: -100
            }, {
                xPercent: 0,
                ease: Power2.easeInOut
            }, 1 * delayOpening)
            .fromTo(($(".slider-slice-imageContainer.image--active").eq(1)), 1, {
                xPercent: -100
            }, {
                xPercent: 0,
                ease: Power2.easeInOut
            }, 2 * delayOpening)
            .fromTo(($(".slider-slice-imageContainer.image--active").eq(2)), 1, {
                xPercent: -100
            }, {
                xPercent: 0,
                ease: Power2.easeInOut
            }, 3 * delayOpening)
            .fromTo(($(".slider-slice-imageContainer.image--active").eq(3)), 1, {
                xPercent: -100
            }, {
                xPercent: 0,
                ease: Power2.easeInOut
            }, 4 * delayOpening)
            .fromTo(($(".slider-slice-imageContainer.image--active").eq(4)), 1, {
                xPercent: -100
            }, {
                xPercent: 0,
                ease: Power2.easeInOut
            }, 2 * delayOpening)
            .fromTo(($(".slider-slice-imageContainer.image--active").eq(5)), 1, {
                xPercent: -100
            }, {
                xPercent: 0,
                ease: Power2.easeInOut
            }, 3 * delayOpening)
            .fromTo(($(".slider-slice-imageContainer.image--active").eq(6)), 1, {
                xPercent: -100
            }, {
                xPercent: 0,
                ease: Power2.easeInOut
            }, 5 * delayOpening)
            .fromTo(($(".slider-slice-imageContainer.image--active").eq(7)), 1, {
                xPercent: -100
            }, {
                xPercent: 0,
                ease: Power2.easeInOut
            }, 5 * delayOpening)
            .fromTo(($(".slider-slice-imageContainer.image--active").eq(8)), 1, {
                xPercent: -100
            }, {
                xPercent: 0,
                ease: Power2.easeInOut
            }, 3 * delayOpening)
            .fromTo(($(".slider-slice-imageContainer.image--active").eq(9)), 1, {
                xPercent: -100
            }, {
                xPercent: 0,
                ease: Power2.easeInOut
            }, 4 * delayOpening)
            .fromTo(($(".slider-slice-imageContainer.image--active").eq(10)), 1, {
                xPercent: -100
            }, {
                xPercent: 0,
                ease: Power2.easeInOut
            }, 5 * delayOpening)
            .fromTo(($(".slider-slice-imageContainer.image--active").eq(11)), 1, {
                xPercent: -100
            }, {
                xPercent: 0,
                ease: Power2.easeInOut
            }, 6 * delayOpening)
            .fromTo(CTA, 0.6, {
                autoAlpha: 0
            }, {
                autoAlpha: 1
            });


            /********************************
              SLIDE BACKGROUND
            ********************************/
            var durationSlide = 0.8;
            var durationText = 0.8;
            var isMoving = false;

            function slideBackground(fromRight) {
                isMoving = true;
                var tlSlideBackground = new TimelineMax({
                    onComplete: function () {
                        isMoving = false
                    }
                });
                imageActive = $(".image--active");

                if (fromRight === true) {
                    var from = 105;
                    var to = -100;
                } else {
                    var from = -105;
                    var to = 100;
                }
                var k = 0;

                imageActive.each(function (i, el) {
                    var parent = $(el).closest(".slider-slice");
                    if (fromRight === true) {
                        var nextSlice = $(el).next();
                    } else {
                        var nextSlice = $(el).prev();
                    }
                    if (nextSlice.is(':last-child') || nextSlice.is(':first-child')) {
                        parent.find(".slider-slice-imageContainer").eq(0).appendTo(parent);
                    }
                    if (nextSlice.index() == -1) {
                        parent.find(".slider-slice-imageContainer").eq(0).appendTo(parent);
                        var nextSlice = $(el).prev();
                    }
                    tlSlideBackground
                        .to(el, (durationSlide * 1.1), {
                            xPercent: to,
                            ease: Power2.easeInOut
                        }, delays[k])
                        .fromTo(nextSlice, durationSlide, {
                            xPercent: from
                        }, {
                            xPercent: 0,
                            ease: Power2.easeInOut
                        }, delays[k])
                    $(el).removeClass("image--active");
                    nextSlice.addClass("image--active");
                    k++;
                    if (k == 4) {
                        k = 0;
                    }
                });

            }

            /********************************
              CTA ACTIONS
            ********************************/
            $(".navigation--next").click(function () {
                var fromRight = true;
                if (!(isMoving)) {
                    slideBackground(fromRight);
                }
            }); $(".navigation--prev").click(function () {
                var fromRight = false;
                if (!(isMoving)) {
                    slideBackground(fromRight);
                }
            });

        })(jQuery);