$(document).ready(function() {
    const BREAKPOINT = 768;

    /* Replace all modal available modal close icons */
    $(".modal-close-icon").each(function() {
        $(this).html("<span class=\"fa fa-times\"></span>");
    });

    /* Add close icon to all modal available modal close buttons */
    $(".modal-close-button").each(function() {
        var html = $(this).html();
        $(this).html("<span class=\"fa fa-times\"></span> " + html);
    });

    /* Smooth scroll to position */
    function scrollToPosition(tag) {
        /* If navigation menu is shown on mobile devices, remove class "in" to
           trigger the menu to hide */
        if ($("div#navbar").hasClass("in")) {
            $("div#navbar").removeClass("in");
        } // End of if statement

        var hashPos = tag.search("#");
    
        if (hashPos >= 0) { /* found hash in url */
            tag = tag.substr(hashPos + 1); 
            var target = tag.split(/[\?&, ]/)[0];
            var adj = 15;

            if ($('a[name="' + target + '"]').length) {      // If tag exists, scroll to position
                $('html, body').animate({
                    scrollTop: $('[name="' + target + '"]').offset().top - adj
                }, 300);
            } // End of if statement
        } // End of if statement
    } // # End of function scrollToPosition

    /* Event handler for smooth scrolling */
    $("body").on("click", ".smooth-scroll", function() {
        tag = $.attr(this, "href");
        scrollToPosition(tag);
    }); 

    // enable smooth-scroll with tags pointing to different page rather than on the same page
    if (location.hash.length != 0) {
        scrollToPosition(location.hash);
    } // end of if statement

    // Disable right-click (context menu) on all images in website
    $("body img").on("contextmenu",function(e){
        return false;
    });

    // Disable dragging of logo on all images in website
    $("body img").mousedown(function(e){
        e.preventDefault();
   });

   $(".c-navbar-dropdown").hover(
        function() {        // handler in
            if ($(window).width() > BREAKPOINT) {
                $(this).find(".c-navbar-dropdown-menu").each(function() {
                    $(this).css("display", "block");
                });
            } // End of if statement
        },
        function() {        // handler out
            if ($(window).width() > BREAKPOINT) {
                $(this).find(".c-navbar-dropdown-menu").each(function() {
                    $(this).css("display", "none");
                });
            } // End of if statement
        }
    );

    $(".c-navbar-toggler").on("click", function() {
        var navigation = $(".c-navbar-navigation");

        if (navigation.is(":visible")) {
            navigation.css("display", "none");
            navigation.attr("state", "off");
            navigation.find(".c-navbar-dropdown-menu").each(function() {
                $(this).css("display", "none");
            });
        } // End of if statement
        else {
            navigation.css("display", "block");
            navigation.attr("state", "on");
            navigation.find(".c-navbar-dropdown-menu").each(function() {
                $(this).css("display", "block");
            });
        } // end of else statement
    });

    $(window).resize(function() {
        $("#page-width").html($(window).width());
        $("#page-height").html($(window).height());

        var toggler = $(".c-navbar-toggler");
        var navigation = $(".c-navbar-navigation");                

        if (toggler.is(":visible")) {  // Mobdile friendly, just hide navigation
            var openState = false;
            if (navigation.is(":visible")) {
                openState = true;
            } // End of if statement

            navigation.css("display", "none");
            navigation.find(".c-navbar-dropdown-menu").each(function() {
                $(this).css("display", "none");
            });

            if (openState) {
                navigation.show();
                navigation.find(".c-navbar-dropdown-menu").each(function() {
                    $(this).css("display", "block");
                });
            } // End of if statement
        } // End of if statement
        else {      // Fix flex box
            navigation.css("display", "flex");
            navigation.css("display", "-ms-flexbox");
            navigation.css("flex-direction", "row");
            navigation.css("-ms-flex-direction", "row");
            navigation.css("flex-wrap", "nowrap");
            navigation.css("-ms-flex-wrap", "nowrap");
            navigation.css("flex-grow", 1);
            navigation.css("ms-flex-grow", 1);

            navigation.find(".c-navbar-dropdown-menu").each(function() {
                $(this).css("display", "none");
            });
        } // End of else statement
    });


    // Additional page functions
    $(function () {
        /* add caret symbols to all links in navbar-dropdown */
        $(".c-navbar .c-navbar-dropdown .c-navbar-link").each(function() {
            $(this).append("<div class=\"c-navbar-link-caret\">&rang;</div>\n");
        });

        /* Enable AOS (Animate on Scroll) package */
        AOS.init({
            duration: 1000,
            delay: 100,
            easing: "ease-in-out",
            once: true,
        });

        /* Enable lazy loading of images */
        $("body .lazy").Lazy();

        /* Add tooltip for back to top page anchors */
        $("body .page-anchor").each(function() {
            $(this)
                .attr("data-bs-toggle", "tooltip")
                .attr("data-bs-placement", "bottom")
                .attr("title", "Back to Top");
            $(this).addClass("float-end smooth-scroll d-none d-md-block");
        });

        /* enable all tooltips */
        $("body [data-bs-toggle='tooltip']").tooltip();

        /* re-format all buttons and add a right-arrow */
        $(".btn-arrow-right").each(function() {
            $(this).append(" <span class=\"fas fa-chevron-circle-right\"></span>");
        });

        // Add "fas fa-ellipsis-h"
        $("body .add-ellipsis-h").each(function (index) {
            var currHTML = $(this).html();
            $(this).html("<span class=\"fas fa-ellipsis-h text-primary\"></span> " + currHTML);
        });

        // Add "fas fa-ellipsis-v"
        $("body .add-ellipsis-v").each(function (index) {
            var currHTML = $(this).html();
            $(this).html("<span class=\"fas fa-ellipsis-v text-primary\"></span> " + currHTML);
        });
    });
});