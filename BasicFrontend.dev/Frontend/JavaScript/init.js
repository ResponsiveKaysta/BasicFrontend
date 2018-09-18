﻿/*
	Spectral by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/* skel.js v3.0.2-dev | (c) skel.io | MIT licensed */

(function ($) {

    skel.breakpoints({
        xxlarge: '(min-width: 1680px)',
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    $(function () {

        var $window = $(window),
            $body = $('body'),
            $wrapper = $('#page-wrapper'),
            $banner = $('#banner'),
            $equalizer = $('#equalizer'),
            $header = $('#header');

        // Mobile?
        if (skel.vars.isMobile)
            $body.addClass('is-mobile');
        else
            skel
                .on('-medium !medium', function () {
                    $body.removeClass('is-mobile');
                })
                .on('+medium', function () {
                    $body.addClass('is-mobile');
                });

        // Scrolly.
        $('.scrolly').scrolly({
            speed: 1500,
            offset: $header.outerHeight()
        });

        // Menu.
        var $menu = $('#menu'),
            $menuClose = $('<a class="close">').appendTo($menu),
            $menuToggle = $('.menuToggle');

        // Move to end of body.
        $menu.appendTo($body);

        // Close.
        $menuClose.on('click touchend', function (event) {
            event.preventDefault();
            event.stopPropagation();
            $body.removeClass('is-menu-visible');
        });

        // Toggle.
        $menuToggle.on('click touchend', function (event) {
            event.preventDefault();
            event.stopPropagation();
            $body.toggleClass('is-menu-visible');
        });

        // Wrapper.
        $wrapper.on('click touchend', function (event) {
            if ($body.hasClass('is-menu-visible')) {
                event.preventDefault();
                event.stopPropagation();
                $body.removeClass('is-menu-visible');
            }
        });

        // Header.
        if (skel.vars.IEVersion < 9)
            $header.removeClass('alt');

        if ($banner.length > 0 && $header.hasClass('alt')) {
            $window.on('resize', function () { $window.trigger('scroll'); });

            $banner.scrollex({
                bottom: $header.outerHeight() + 1,
                terminate: function () { $header.removeClass('alt'); },
                enter: function () { $header.addClass('alt'); },
                leave: function () { $header.removeClass('alt'); }
            });
        }

        // get equal height for blogarchive elements
        if ($equalizer.length > 0 && $equalizer.hasClass('blogarchive')) {
            getElementEqualHeight($(".equal"));
        }

        $window.ready(function() {

            if (skel.breakpoint("small").active) {
                /* do something specific for small displays */
            }
            if (skel.vars.touch) {
                /* enable feature for devices with a touchscreen */
            }
            if (skel.vars.IEVersion < 9) {
                /* apply workaround for IE<9 */
            }
            console.log('[window] - ready ...');

        });

        $window.resize(function() {

            if ($equalizer.length > 0 && $equalizer.hasClass('blogarchive')) {
                getElementEqualHeight($(".equal"));
            }

            console.log('[window] - resize ...');

        });

    });

})(jQuery);