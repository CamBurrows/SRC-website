$(document).ready(function () {

    $(".section").click(function () {
        window.location = $(this).find("a").attr("href");
        return false;
    });

    $("#about-id").hover(function () {
        $(".learn").addClass("learn-active")
    }, function () {
        $(".learn").removeClass("learn-active")
    })

    $("#careers-id").hover(function () {
        $(".careers").addClass("careers-active")
    }, function () {
        $(".careers").removeClass("careers-active")
    })

    $("#location-id").hover(function () {
        $(".locations").addClass("locations-active")
    }, function () {
        $(".locations").removeClass("locations-active")
    })

})