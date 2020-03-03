$(document).on({
    ajaxStart: function () {
        $(".loader").show();
    },
    ajaxStop: function () {
        $(".loader").hide();
    },
    ajaxError: function () {
        $(".loader").hide();
    }
});

var slideIndex = 0;
slideShow();

function slideShow() {
    var i;
    var x = $(".slideshow");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { 
        slideIndex = 1 
    }
    x[slideIndex - 1].style.display = "block";
    setTimeout(slideShow, 2000); // Change image every 2 seconds
}