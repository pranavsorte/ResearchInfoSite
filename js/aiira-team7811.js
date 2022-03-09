$(document).ready(function() {
    /*
    $("svg g#headshots-iowa-state-university image").hover(
        function() {        // Hover in
            // Replace headshot tag by circle tag
            var id = $(this).closest("g[id^='headshot-']").attr("id").replace("headshot-", "circle-");
            $("#" + id).css("fill", "#c8102e");
        },
        function() {        // Hover out
            // Replace headshot tag by circle tag
            var id = $(this).closest("g[id^='headshot-']").attr("id").replace("headshot-", "circle-");
            $("#" + id).css("fill", "#ffffff");
        }
    );

    $("svg g#headshots-carnegie-mellon-university image").hover(
        function() {        // Hover in
            // Replace headshot tag by circle tag
            var id = $(this).closest("g[id^='headshot-']").attr("id").replace("headshot-", "circle-");
            $("#" + id).css("fill", "#c41230");
        },
        function() {        // Hover out
            // Replace headshot tag by circle tag
            var id = $(this).closest("g[id^='headshot-']").attr("id").replace("headshot-", "circle-");
            $("#" + id).css("fill", "#ffffff");
        }
    );

    $("svg g#headshots-university-of-arizona image").hover(
        function() {        // Hover in
            // Replace headshot tag by circle tag
            var id = $(this).closest("g[id^='headshot-']").attr("id").replace("headshot-", "circle-");
            $("#" + id).css("fill", "#0c234b");
            $("#" + id).css("stroke", "#ab0520");
        },
        function() {        // Hover out
            // Replace headshot tag by circle tag
            var id = $(this).closest("g[id^='headshot-']").attr("id").replace("headshot-", "circle-");
            $("#" + id).css("fill", "#ffffff");
            $("#" + id).css("stroke", "#0c234b");
        }
    );

    $("svg g#headshots-george-mason-university image").hover(
        function() {        // Hover in
            // Replace headshot tag by circle tag
            var id = $(this).closest("g[id^='headshot-']").attr("id").replace("headshot-", "circle-");
            $("#" + id).css("fill", "#006633");
            $("#" + id).css("stroke", "#ffcc33");
        },
        function() {        // Hover out
            // Replace headshot tag by circle tag
            var id = $(this).closest("g[id^='headshot-']").attr("id").replace("headshot-", "circle-");
            $("#" + id).css("fill", "#ffffff");
            $("#" + id).css("stroke", "#006633");
        }
    );

    $("svg g#headshots-university-of-missouri image").hover(
        function() {        // Hover in
            // Replace headshot tag by circle tag
            var id = $(this).closest("g[id^='headshot-']").attr("id").replace("headshot-", "circle-");
            $("#" + id).css("fill", "#f1b72d");
        },
        function() {        // Hover out
            // Replace headshot tag by circle tag
            var id = $(this).closest("g[id^='headshot-']").attr("id").replace("headshot-", "circle-");
            $("#" + id).css("fill", "#ffffff");
        }
    );

    $("svg g#headshots-iowa-soybean-association image").hover(
        function() {        // Hover in
            // Replace headshot tag by circle tag
            var id = $(this).closest("g[id^='headshot-']").attr("id").replace("headshot-", "circle-");
            $("#" + id).css("fill", "#002a8d");
        },
        function() {        // Hover out
            // Replace headshot tag by circle tag
            var id = $(this).closest("g[id^='headshot-']").attr("id").replace("headshot-", "circle-");
            $("#" + id).css("fill", "#ffffff");
        }
    );

    $("svg g#headshots-university-of-nebraska image").hover(
        function() {        // Hover in
            // Replace headshot tag by circle tag
            var id = $(this).closest("g[id^='headshot-']").attr("id").replace("headshot-", "circle-");
            $("#" + id).css("fill", "#d00000");
        },
        function() {        // Hover out
            // Replace headshot tag by circle tag
            var id = $(this).closest("g[id^='headshot-']").attr("id").replace("headshot-", "circle-");
            $("#" + id).css("fill", "#ffffff");
        }
    );

    $("svg g#headshots-new-york-university image").hover(
        function() {        // Hover in
            // Replace headshot tag by circle tag
            var id = $(this).closest("g[id^='headshot-']").attr("id").replace("headshot-", "circle-");
            $("#" + id).css("fill", "#572c86");
        },
        function() {        // Hover out
            // Replace headshot tag by circle tag
            var id = $(this).closest("g[id^='headshot-']").attr("id").replace("headshot-", "circle-");
            $("#" + id).css("fill", "#ffffff");
        }
    );
    */

    $("svg image").on("click", function() {
        var id=$(this).closest("g[id^='headshot-'").attr("id").replace("headshot-", "").split("_")[0];
        $("a[href='#" + id + "']").trigger("click");        // Scroll to tag
        $(this).blur();                                     // diselect click
    });

});