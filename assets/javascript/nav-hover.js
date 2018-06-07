$(document).ready(function () {

    $(".nav-link-custom").hover(function () {
        image = $(this).find("img")
        standardIcon = image.attr("src")
        let colorIcon = (standardIcon.split("."))[0]
        colorIcon = colorIcon + "-color.png"
        console.log(colorIcon)
        image.attr("src", colorIcon)
    }, function () {
        image.attr("src", standardIcon)
    })
})